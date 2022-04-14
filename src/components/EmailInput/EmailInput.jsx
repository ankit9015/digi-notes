import React from "react";

function EmailInput(props) {
  const { onChange: _onChange, value: _value } = props;
  return (
    <label className="flex-column">
      <span className="text-md socketui-label label-required">Email:</span>
      <input
        className="socketui-input email-input text-md"
        type="email"
        name="email"
        placeholder="xyz@abc.com"
        required
        value={_value}
        onChange={_onChange}
      />
    </label>
  );
}

export default EmailInput;
