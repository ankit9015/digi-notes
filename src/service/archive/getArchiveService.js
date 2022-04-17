import axios from "axios";
import React from "react";

const getArchiveService = async (tokenValue) => {
  try {
    const response = await axios.get("api/archives", {
      headers: {
        authorization: tokenValue,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getArchiveService;
