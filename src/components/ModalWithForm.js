import React from "react";
import closeIcon from "../images/close.svg";

const ModalWithForm = ({
  title,
  buttonText,
  onClose,
  children,
  onOutClick,
  handleSubmit,
  altButtonClick,
  isValid,
}) => {
  if (!buttonText.other) {
    buttonText.other = null;
  }

  React.useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="modal__container-form" onClick={onOutClick}>
      <form className="modal__form" onSubmit={handleSubmit}>
        <fieldset className="modal__fieldset">
          <button type="button" className="modal__button" aria-label="Close">
            <img
              className="modal__close"
              alt="Close button"
              src={closeIcon}
              id="addModal-close"
              onClick={onClose}
            />
          </button>
          <h2 className="modal__header">{title}</h2>
          {children}
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
