import axios from "axios";

const updateNoteService = async (currentNote, tokenValue) => {
  try {
    const response = await axios.post(
      `/api/notes/${currentNote._id}`,
      { note: { ...currentNote } },
      {
        headers: {
          authorization: tokenValue,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { updateNoteService };
