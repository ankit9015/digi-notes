import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import addNoteService from "../../service/Notes/addNoteService";
import deleteNoteService from "../../service/Notes/deleteNotesService";
import getNotesService from "../../service/Notes/getNotesService";
import {
  updateNotePinService,
  updateNoteService,
} from "../../service/Notes/updateNoteService";

import { useAuth } from "../AuthContext/AuthContext";
import { defaultNotesState, notesReducer } from "./notesReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const { authState } = useAuth();
  const [notesList, setNotesList] = useState([]);
  const [notesState, notesDispatch] = useReducer(
    notesReducer,
    defaultNotesState
  );
  const [noteLabels, setNoteLabels] = useState(["Home", "Work"]);
  const trash = JSON.parse(localStorage.getItem("TRASH"));

  useEffect(() => {
    if (authState.isLoggedIn) {
      (async () => {
        try {
          const response = await getNotesService(authState.authToken);
          const notesFromServer = response.data.notes;
          setNotesList(notesFromServer);
        } catch (error) {
          console.error(error);
        }
      })();
    } else {
      setNotesList([]);
    }
  }, [authState]);

  const addNote = async (newNote) => {
    try {
      const response = await addNoteService(newNote, authState.authToken);

      const notesFromServer = response.data.notes;
      setNotesList(notesFromServer);
    } catch (error) {
      console.error(error);
    }
  };

  const updateNote = async (currentNote) => {
    try {
      const response = await updateNoteService(
        currentNote,
        authState.authToken
      );
      const notesFromServer = response.data.notes;
      setNotesList(notesFromServer);
    } catch (error) {
      console.error(error);
    }
  };

  const updateNotePinStatus = async (currentNote) => {
    try {
      const response = await updateNotePinService(
        currentNote,
        authState.authToken
      );
      const notesFromServer = response.data.notes;
      setNotesList(notesFromServer);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NotesContext.Provider
      value={{
        notesState,
        defaultNotesState,
        notesList,
        noteLabels,
        setNoteLabels,
        notesDispatch,
        addNote,
        updateNote,
        deleteNote,
        updateNotePinStatus,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { useNotes, NotesProvider };
