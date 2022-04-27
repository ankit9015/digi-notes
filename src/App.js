import "./App.css";
import { useState } from "react";
import Main from "./page-layout/Main/Main";
import Header from "./page-layout/Header/Header";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { NotesProvider } from "./context/NotesContext/NotesContext";
import { ArchiveProvider } from "./context/ArchiveContext/ArchiveContext";
import { FilterProvider } from "./context/FilterContext/FilterContext";

function App() {
  const [isDarkTheme, setTheme] = useState(false);

  return (
    <div className={`App flex-column ${isDarkTheme ? "dark-theme" : ""}`}>
      <AuthProvider>
        <NotesProvider>
          <ArchiveProvider>
            <FilterProvider>
              <Header setTheme={setTheme} isDarkTheme={isDarkTheme} />
              <Main />
            </FilterProvider>
          </ArchiveProvider>
        </NotesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
