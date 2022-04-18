import { createContext, useContext, useState, useEffect } from "react";
import addArchiveService from "../../service/archive/addArchiveService";
import deleteFromArchivesService from "../../service/archive/deleteFromArchivesService";
import getArchiveService from "../../service/archive/getArchiveService";
import restoreFromArchivesService from "../../service/archive/restoreFromArchivesService";
import { useAuth } from "../AuthContext/AuthContext";
import { useNotes } from "../NotesContext/NotesContext";

const ArchiveContext = createContext({});

const ArchiveProvider = ({ children }) => {
  const [archive, setArchive] = useState([]);
  const { setNotesList, trash } = useNotes();
  const { authState } = useAuth();

  useEffect(() => {
    try {
      if (authState.isLoggedIn) {
        (async () => {
          const response = await getArchiveService(authState.authToken);
          if (response.data !== undefined) {
            setArchive(response.data.archives);
          }
        })();
      } else {
        setArchive([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const addToArchive = async (currentNote) => {
    try {
      const response = await addArchiveService(
        currentNote,
        authState.authToken
      );
      if (response.data !== undefined) {
        setArchive(response.data.archives);
        setNotesList(response.data.notes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const restoreFromArchive = async (currentNote) => {
    try {
      const response = await restoreFromArchivesService(
        currentNote,
        authState.authToken
      );
      if (response.data !== undefined) {
        setArchive(response.data.archives);
        setNotesList(response.data.notes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFromArchive = async (currentNote) => {
    try {
      const response = await deleteFromArchivesService(
        currentNote,
        authState.authToken
      );
      if (response.data !== undefined) {
        setArchive(response.data.archives);
        localStorage.setItem("TRASH", JSON.stringify([...trash, currentNote]));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ArchiveContext.Provider
      value={{
        archive,
        setArchive,
        addToArchive,
        restoreFromArchive,
        deleteFromArchive,
      }}
    >
      {children}
    </ArchiveContext.Provider>
  );
};

const useArchive = () => useContext(ArchiveContext);

export { ArchiveProvider, useArchive };
