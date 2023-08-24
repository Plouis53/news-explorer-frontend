import React from "react";
import closeIcon from "../../images/close.svg";

const ModalWithForm = ({
  title,
  children,
  onClose,
  buttonText,
  onOutClick,
  handleSubmit,
  altButtonClick,
  errorMessage,
  isValid,
}) => {
  if (!buttonText.other) {
    buttonText.other = null;
  }

  return (
    <div className="modal__container-form" onClick={onOutClick}>
      <form className="modal__form" onSubmit={handleSubmit}>
        <fieldset className="modal__fieldset">
          <button
            className="modal__button"
            type="button"
            aria-label="Close"
            onClick={onClose}
          >
            <img
              className="modal__close"
              alt="modal-close-button"
              src={closeIcon}
              id="addModal-close"
            />
          </button>
          <h2 className="modal__header">{title}</h2>
          {children}
          <span className="modal__errors-signup">{errorMessage}</span>
          <button
            className="modal__main"
            type="submit"
            aria-label="Save"
            id="addSave"
            disabled={!isValid}
          >
            {buttonText.button}
          </button>
          <button
            className="modal__other"
            type="button"
            onClick={altButtonClick}
          >
            or <span className="modal__color">{buttonText.other}</span>
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default ModalWithForm;
