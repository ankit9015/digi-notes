import React from "react";
import { useAuth } from "../../context/AuthContext/AuthContext";
import axios from "axios";

const loginHandlerService = async ({ email, password }) => {
  try {
    const response = await axios.post("/api/auth/login", { email, password });

    return response;
  } catch (err) {
    console.log(err);
    alert("Login email or password incorrect");
  }
};

export { loginHandlerService };
