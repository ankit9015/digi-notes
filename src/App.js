import "./App.css";
import Main from "./page-layout/Main/Main";
import Header from "./page-layout/Header/Header";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { NotesProvider } from "./context/NotesContext/NotesContext";
import { ArchiveProvider } from "./context/ArchiveContext/ArchiveContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NotesProvider>
          <ArchiveProvider>
            <Header />
            <Main />
          </ArchiveProvider>
        </NotesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
