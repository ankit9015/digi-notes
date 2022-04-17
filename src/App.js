import "./App.css";
import Main from "./page-layout/Main/Main";
import Header from "./page-layout/Header/Header";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { NotesProvider } from "./context/NotesContext/NotesContext";
import { ArchiveProvider } from "./context/ArchiveContext/ArchiveContext";
import { FilterProvider } from "./context/FilterContext/FilterContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NotesProvider>
          <FilterProvider>
            <ArchiveProvider>
              <Header />
              <Main />
            </ArchiveProvider>
          </FilterProvider>
        </NotesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
