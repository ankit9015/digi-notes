import axios from "axios";

const restoreFromArchivesService = async (currentNote, tokenValue) => {
  try {
    const response = await axios.post(
      `/api/archives/restore/${currentNote._id}`,
      { note: {} },
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

export default restoreFromArchivesService;
