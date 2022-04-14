import { useState } from "react";
import { FaEye, FaEyeSlash } from "../../utils/icons/icons";

function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false);
  const { onChange: _onChange, value: _value } = props;
  return (
    <label className="flex-column">
      <span className="text-md socketui-label label-required">Password:</span>
      <div className="flex-row input-border">
        <input
          className="socketui-input password-input text-md"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="******"
          required
          value={_value}
          onChange={_onChange}
        ></input>
        <span
          className="text-blue password-show"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </span>
      </div>
    </label>
  );
}

export default PasswordInput;
