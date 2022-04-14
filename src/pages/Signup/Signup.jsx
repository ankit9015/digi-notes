import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "../../utils/icons/icons";

import "../pages.css";

function Signup() {
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    acceptTAndC: false,
  });

  useEffect(() => {
    document.title = "Signup";
  }, []);

  const updateSignupForm = (e) => {
    e.target.name === "acceptTAndC"
      ? setSignupForm({
          ...signupForm,
          acceptTAndC: !signupForm.acceptTAndC,
        })
      : setSignupForm({
          ...signupForm,
          [e.target.name]: e.target.value,
        });
  };

  const postSignupBackend = async (signupForm) => {
    try {
      const response = await axios.post("/api/auth/signup", signupForm);

      localStorage.setItem("userToken", response.data.encodedToken);
    } catch (err) {
      console.log(err);
    }
  };

  const createAccount = () => {
    const { email, password, acceptTAndC } = signupForm;
    console.log(signupForm);
    if (email !== "" && password !== "" && acceptTAndC) {
      postSignupBackend({ email: email, password: password });
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="flex-row flex-center signup-main">
        <div className="card-vertical form-card card-shadow">
          <div className="card-body text-md">
            <h1 className="card-title text-lg m-m font-extrabold text-center">
              Signup
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
                  value={signupForm.email}
                  onChange={(e) => updateSignupForm(e)}
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
                    value={signupForm.password}
                    onChange={(e) => updateSignupForm(e)}
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
                  name="acceptTAndC"
                  value={signupForm.acceptTAndC}
                  onChange={(e) => updateSignupForm(e)}
                />
                <span className="text-md">
                  I accept all the Terms and Conditions
                </span>
              </label>

              <Link
                to=""
                className="button-primary button link-btn text-md text-center"
                onClick={() => createAccount()}
              >
                Create new account
              </Link>

              <Link
                className="text-center text-md button link-btn button-outline-secondary"
                to="../Login"
              >
                Already have an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
