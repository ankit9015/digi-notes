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
  const { notesState, setNotesState, setNotesList, trash } = useNotes();
  const { authState } = useAuth();

  useEffect(() => {
    if (authState.isLoggedIn) {
      (async () => {
        const response = await getArchiveService(authState.authToken);
        console.log(response.data);
        if (response.data !== undefined) {
          setArchive(response.data.archives);
        }
      })();
    } else {
      setArchive([]);
    }
  }, []);

  //   const addToArchive = async () => {};

  const addToArchive = async (currentNote) => {
    const response = await addArchiveService(currentNote, authState.authToken);
    console.log(response);
    if (response.data !== undefined) {
      setArchive(response.data.archives);
      setNotesList(response.data.notes);
    }
  };

  const restoreFromArchive = async (currentNote) => {
    const response = await restoreFromArchivesService(
      currentNote,
      authState.authToken
    );
    if (response.data !== undefined) {
      setArchive(response.data.archives);
      setNotesList(response.data.notes);
    }
  };

  const deleteFromArchive = async (currentNote) => {
    const response = await deleteFromArchivesService(
      currentNote,
      authState.authToken
    );
    if (response.data !== undefined) {
      setArchive(response.data.archives);
      localStorage.setItem("TRASH", JSON.stringify([...trash, currentNote]));
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
