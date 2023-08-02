import React from "react";
import closeIcon from "../images/close.svg";

const ModalWithSuccess = ({ closeModal, handleOutClick }) => {
  return (
    <div className="modal__container-confirm" onClick={handleOutClick}>
      <div className="modal__confirm">
        <button type="button" className="modal__button" aria-label="Close">
          <img
            className="modal__close"
            alt="Close button"
            src={closeIcon}
            onClick={closeModal}
          />
        </button>
        <div className="modal__container_confirm">
          <p className="modal__text_confirm">
            Are you sure you want to delete this item?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalWithSuccess;
