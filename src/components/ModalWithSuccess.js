import React from "react";
import closeIcon from "../images/close.svg";

const ModalWithSuccess = ({
  closeModal,
  handleOutClick,
  handleSigninClick,
}) => {
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
        <h3 className="modal__confirm-title">
          Registration successfully completed!
        </h3>
        <button
          className="modal__confirm-signin"
          onClick={() => {
            handleSigninClick();
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default ModalWithSuccess;
