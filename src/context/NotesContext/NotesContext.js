import { createContext } from "react";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notesState, notesDispatch] = useReducer(notesReducer, defaultState);

  return (
    <NotesContext.Provider value={{ notesState, notesDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};
