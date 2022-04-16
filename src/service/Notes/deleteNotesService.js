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
