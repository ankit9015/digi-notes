import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "../../utils/icons/icons";
import axios from "axios";

import "../pages.css";

function Login() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    email: "",
    password: "",
    rememberUser: false,
  });

  useEffect(() => {
    document.title = "Login";
  }, []);

  const updateLoginForm = (e) => {
    e.target.name === "rememberUser"
      ? setLoginForm({
          ...loginForm,
          rememberUser: !loginForm.rememberUser,
        })
      : setLoginForm({
          ...loginForm,
          [e.target.name]: e.target.value,
        });
  };

  const postLoginBackend = async (loginForm) => {
    try {
      const response = await axios.post("/api/auth/login", loginForm);

      localStorage.setItem("userToken", response.data.encodedToken);
    } catch (err) {
      console.log(err);
    }
  };

  const loginAccount = () => {
    const { email, password, rememberUser } = loginForm;
    console.log(loginForm);
    if (email !== "" && password !== "" && rememberUser) {
      postLoginBackend({ email: email, password: password });
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="flex-row flex-center login-main">
        <div className="card-vertical p-m form-card card-shadow ">
          <div className="card-body text-md">
            <h1 className="card-title text-lg m-m font-extrabold text-center">
              Login
            </h1>
            <div className="form-container ">
              <label className="flex-column">
                <span className="text-md socketui-label label-required">
                  Email:
                </span>
                <input
                  className="socketui-input email-input text-md"
                  type="email"
                  name="email"
                  placeholder="xyz@abc.com"
                  required
                  value={loginForm.email}
                  onChange={(e) => updateLoginForm(e)}
                />
              </label>
              <label className="flex-column">
                <span className="text-md socketui-label label-required">
                  Password:
                </span>
                <div className="flex-row input-border">
                  <input
                    className="socketui-input password-input text-md"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="******"
                    required
                    value={loginForm.password}
                    onChange={(e) => updateLoginForm(e)}
                  ></input>
                  <span
                    className="text-blue password-show"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </label>

              <label>
                <input
                  type="checkbox"
                  name="rememberUser"
                  value={loginForm.rememberUser}
                  onChange={(e) => updateLoginForm(e)}
                />
                <span className="text-md">Remember me</span>
              </label>

              <Link className="text-blue" to="">
                Forgot your Password?
              </Link>
              <Link
                to=""
                className="button-primary button link-btn text-md text-center"
                onClick={() => loginAccount()}
              >
                Login
              </Link>

              <Link
                className="text-center text-md button link-btn button-outline-secondary"
                to="../Signup"
              >
                Create new account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
