import "./App.css";
import { useState } from "react";
import Main from "./page-layout/Main/Main";
import Header from "./page-layout/Header/Header";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { NotesProvider } from "./context/NotesContext/NotesContext";
import { ArchiveProvider } from "./context/ArchiveContext/ArchiveContext";
import { FilterProvider } from "./context/FilterContext/FilterContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext/ThemeContext";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className={`App flex-column`}>
      <AuthProvider>
        <NotesProvider>
          <ArchiveProvider>
            <FilterProvider>
              <ThemeProvider>
                <Header setShowNavbar={setShowNavbar} />
                <Main showNavbar={showNavbar} />
              </ThemeProvider>
            </FilterProvider>
          </ArchiveProvider>
        </NotesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
