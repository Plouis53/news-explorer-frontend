import React from "react";

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
          <button
            className="modal__button"
            type="button"
            aria-label="Close"
            onClick={onClose}
          />
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
