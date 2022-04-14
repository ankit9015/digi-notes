import "./App.css";
import Main from "./page-layout/Main/Main";
import Header from "./page-layout/Header/Header";
import { AuthProvider } from "./context/AuthContext/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Main />
      </AuthProvider>
    </div>
  );
}

export default App;
