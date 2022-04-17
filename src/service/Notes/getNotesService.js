import axios from "axios";
const getNotesService = async (tokenValue) => {
  try {
    const response = await axios.get("/api/notes", {
      headers: {
        authorization: tokenValue,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getNotesService;
