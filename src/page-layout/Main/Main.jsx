import React from "react";
import { Routes, Route } from "react-router-dom";
import MockAPI from "../../pages/MockMan/MockMan";
import {
  Home,
  Login,
  Signup,
  Trash,
  Archive,
  Profile,
  PageNotFound,
} from "../../pages/pages";
import Navbar from "../Navbar/Navbar";
import "../page-layout.css";

function Main() {
  const specialPages = ["/", "/login", "/signup", "page-not-found", "/archive"];
  return (
    <div className="flex-row">
      <Navbar />
      <div className="page-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/mockman" element={<MockAPI />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
