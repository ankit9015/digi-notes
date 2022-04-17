import axios from "axios";

const addNoteService = async (newNote, tokenValue) => {
  try {
    const response = await axios.post(
      "/api/notes",
      { note: { ...newNote } },
      {
        headers: {
          authorization: tokenValue,
        },
      }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

export default addNoteService;
