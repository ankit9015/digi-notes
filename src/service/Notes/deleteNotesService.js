import axios from "axios";

const deleteNoteService = async (currentNote, tokenValue) => {
  try {
    const response = await axios.delete(`/api/notes/${currentNote._id}`, {
      headers: { authorization: tokenValue },
    });
    return response;
  } catch (error) {
    console.log(error);
    error;
  }
};

export default deleteNoteService;
