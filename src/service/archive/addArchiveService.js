import axios from "axios";
import React from "react";

const addArchiveService = async (currentNote, tokenValue) => {
  try {
    const response = await axios.post(
      `/api/notes/archives/${currentNote._id}`,
      {
        note: { ...currentNote },
      },
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

export default addArchiveService;
