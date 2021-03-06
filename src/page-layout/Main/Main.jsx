import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext/ThemeContext";
import FilteredNotes from "../../pages/FilteredNotes/FilteredNotes";
import MockAPI from "../../pages/MockMan/MockMan";
import Notes from "../../pages/Notes/Notes";
import {
  Home,
  Login,
  Signup,
  Trash,
  Archive,
  Profile,
  PageNotFound,
  Label,
} from "../../pages/pages";
import PrivateRoute from "../../Routes/PrivateRoute";
import Navbar from "../Navbar/Navbar";
import "../page-layout.css";

function Main(props) {
  const specialPages = ["/", "/login", "/signup", "page-not-found"];
  const location = useLocation();
  const { isDarkTheme } = useTheme();
  return (
    <div className={`flex-row layout-main  ${isDarkTheme ? "dark-theme" : ""}`}>
      {!specialPages.includes(location.pathname) && (
        <Navbar showNavbar={props.showNavbar} />
      )}
      <div className="page-main p-m">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/label" element={<Label />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/filteredNotes"
            element={
              <PrivateRoute>
                <FilteredNotes />
              </PrivateRoute>
            }
          />

          <Route
            path="/trash"
            element={
              <PrivateRoute>
                <Trash />
              </PrivateRoute>
            }
          />
          <Route
            path="/archive"
            element={
              <PrivateRoute>
                <Archive />
              </PrivateRoute>
            }
          />
          <Route
            path="/notes"
            element={
              <PrivateRoute>
                <Notes />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/mockman" element={<MockAPI />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
