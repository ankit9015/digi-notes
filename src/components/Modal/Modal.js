import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
import "../../App.css";
import { MdClose } from "../../utils/icons/icons";

function Modal({ children, closeModal }) {
  const portal = document.getElementById("portal-root");
  const modal = (
    <>
      <div className="modal-backdrop"></div>
      <div className="modal">
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
