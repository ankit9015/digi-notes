import axios from "axios";

const deleteFromArchivesService = async (currentNote, tokenValue) => {
  try {
    const response = await axios.delete(
      `/api/archives/delete/${currentNote._id}`,
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

export default deleteFromArchivesService;
