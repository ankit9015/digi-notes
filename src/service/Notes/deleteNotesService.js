import axios from "axios";

const deleteNoteService = async (currentNote, tokenValue) => {
  try {
    const response = await axios.delete(
      `/api/notes/${currentNote._id}`,
      { note: { ...currentNote } },
      { headers: { authorization: tokenValue } }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    error;
  }
};

export default deleteNoteService;

const deleteNote = async (currentNote) => {
  try {
    const response = deleteNoteService(currentNote, authState.authToken);
    setNotesList((await response).data.notes);
    trash = [...trash, currentNote];
    localStorage.setItem("TRASH", JSON.stringify(trash));
  } catch (error) {
    console.log(error);
  }
};
