import React from 'react';
import closeIcon from '../../images/close.svg';

const ModalWithForm = ({
  title,
  children,
  onClose,
  buttonText,
  onOutClick,
  handleSubmit,
  altButtonClick,
  errorMessage,
  isValid
}) => {
  const updatedButtonText = {
    ...buttonText,
    other: null
  };

  return (
    <div className="modal">
      <div className="modal__container-form" onClick={onOutClick}>
        <form className="modal__form" onSubmit={handleSubmit}>
          <fieldset className="modal__fieldset">
            <button
              className="modal__close-button"
              type="button"
              aria-label="Close"
              onClick={onClose}>
              <img alt="modal-close-button" src={closeIcon} id="addModal-close" />
            </button>
            <h2 className="modal__title">{title}</h2>
            {children}
            <span className="modal__errors-signup">{errorMessage}</span>
            <button
              className="modal__submit-button"
              type="submit"
              aria-label="Save"
              id="addSave"
              disabled={!isValid}>
              {updatedButtonText.button}
            </button>
            <button className="modal__other-button" type="button" onClick={altButtonClick}>
              or <span className="modal__color-text">{buttonText.other}</span>
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;

// import React from 'react';
// import closeIcon from '../../images/close.svg';

// const ModalWithForm = ({
//   title,
//   children,
//   onClose,
//   buttonText,
//   onOutClick,
//   handleSubmit,
//   altButtonClick,
//   errorMessage,
//   isValid
// }) => {
//   const updatedButtonText = {
//     ...buttonText,
//     other: null
//   };
//   return (

//     <div className="modal__container-form" onClick={onOutClick}>
//       <form className="modal__form" onSubmit={handleSubmit}>
//         <fieldset className="modal__fieldset">
//           <button
//             className="modal__close-button"
//             type="button"
//             aria-label="Close"
//             onClick={onClose}
//           >
//             <img alt="modal-close-button" src={closeIcon} id="addModal-close" />
//           </button>
//           <h2 className="modal__title">{title}</h2>
//           {children}
//           <span className="modal__errors-signup">{errorMessage}</span>
//           <button
//             className="modal__submit-button"
//             type="submit"
//             aria-label="Save"
//             id="addSave"
//             disabled={!isValid}
//           >
//             {updatedButtonText.button}
//           </button>
//           <button className="modal__other-button" type="button" onClick={altButtonClick}>
//             or <span className="modal__color-text">{buttonText.other}</span>
//           </button>
//         </fieldset>
//       </form>
//     </div>
//   );
// };

// export default ModalWithForm;
