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
  errorMessage,
  setErrorMessage,
}) => {
  if (!buttonText.other) {
    buttonText.other = null;
  }

  React.useEffect(() => {
    setErrorMessage("");
  }, []);

  // 1. you press submit button
  // 2. form sees this submit event and run onSubmit
  // 3. browser overtakes your js, detects a form was submitted
  // 4. browser handles your form as it wants and do not care about your code
  // solution: event.preventDefault();

  // submit -> parent => parent -> parent => useForm custom hook. Somewhere between should be preventDefault

  return (
    <div className="modal" onClick={onOutClick}>
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
