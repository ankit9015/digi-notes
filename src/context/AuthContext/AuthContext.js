import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginHandlerService } from "../../service/authentication/loginHandlerService";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const authToken = JSON.parse(localStorage.getItem("AUTH-TOKEN"));

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    authToken: "",
  });

  const loginHandler = async ({ email, password }) => {
    const { data, status } = await loginHandlerService({ email, password });
    if (status === 200) {
      localStorage.setItem("AUTH-TOKEN", JSON.stringify(data.encodedToken));
      setAuthState({
        isLoggedIn: true,
        authToken: JSON.stringify(data.encodedToken),
      });
      location.state
        ? navigate(location.state.from.pathname)
        : navigate("/home");
    }
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthState, loginHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
