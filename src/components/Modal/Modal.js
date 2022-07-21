import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
import "../../App.css";
import { MdClose } from "../../utils/icons/icons";
import { useTheme } from "../../context/ThemeContext/ThemeContext";

function Modal({ children, closeModal }) {
  const portal = document.getElementById("portal-root");
  const { isDarkTheme } = useTheme();
  const modal = (
    <>
      <div
        className={`modal-backdrop ${isDarkTheme ? "dark-theme" : ""}`}
      ></div>
      <div className={`modal ${isDarkTheme ? "dark-theme" : ""}`}>
        <MdClose
          onClick={() => closeModal()}
          className="modal-close-button text-lg"
        />
        <div>{children}</div>
      </div>
    </>
  );

  return createPortal(modal, portal);
}

export default Modal;
