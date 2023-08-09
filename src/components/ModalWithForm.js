import React from "react";
import closeIcon from "../images/close.svg";
import "../blocks/modalwithform.css";

const ModalWithForm = ({
  title,
  children,
  onClose,
  buttonText,
  onOutClick,
  handleSubmit,
  // buttonClass,
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
              // onClick={onClose}
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

//8923 import React from "react";

// const ModalWithForm = ({
//   title,
//   buttonText,
//   onClose,
//   children,
//   onOutClick,
//   handleSubmit,
//   altButtonClick,
//   isValid,
//   errorMessage = "This is an error message.",
// }) => {
//   if (!buttonText.other) {
//     buttonText.other = null;
//   }

//   const handleCloseModal = () => {
//     onClose(); // Call the onClose function
//   };

//   // 1. you press submit button
//   // 2. form sees this submit event and run onSubmit
//   // 3. browser overtakes your js, detects a form was submitted
//   // 4. browser handles your form as it wants and do not care about your code
//   // solution: event.preventDefault();

//   // submit -> parent => parent -> parent => useForm custom hook. Somewhere between should be preventDefault
//   console.log(buttonText);
//   return (
//     <div className="modal" onClick={onOutClick}>
//       <form className="modal__form" onSubmit={handleSubmit}>
//         <fieldset className="modal__fieldset">
//           <button
//             className="modal__button"
//             type="button"
//             aria-label="Close"
//             onClick={handleCloseModal}
//           />
//           <h2 className="modal__header">{title}</h2>
//           {children}
//           <span className="modal__errors-signup">{errorMessage}</span>
//           <button
//             className="modal__main"
//             type="submit"
//             aria-label="Save"
//             id="addSave"
//             disabled={!isValid}
//           >
//             {buttonText.button}
//           </button>
//           <button
//             className="modal__other"
//             type="button"
//             onClick={altButtonClick}
//           >
//             or <span className="modal__color">{buttonText.other}</span>
//           </button>
//         </fieldset>
//       </form>
//     </div>
//   );
// };

// export default ModalWithForm;
