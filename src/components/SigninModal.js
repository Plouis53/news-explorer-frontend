import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";
import { useForm } from "react-hook-form";

const SignModal = ({
  onClose,
  handleOutClick,
  handleSignin,
  handleRegisterClick,
  isLoading,
  errorMessage,
  setErrorMessage,
}) => {
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");

  console.log(handleRegisterClick);
  console.log(onClose);

  const buttonClasses = {
    mainButton: "modal__login",
    altButton: "modal__other",
  };
  const buttonTexts = {
    button: isLoading ? "Saving..." : "Sign in",
    other: "or Sign up",
  };

  const {
    formState: { errors, isValid },
  } = useForm();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!emailValue || !passwordValue) {
      return;
    }
    const user = { email: emailValue, password: passwordValue };
    handleSignin(user);
  };

  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  React.useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  return (
    <ModalWithForm
      title="Sign in"
      name="Signin"
      onClose={onClose}
      buttonText={buttonTexts}
      onOutClick={handleOutClick}
      handleSubmit={handleSubmit}
      buttonClass={buttonClasses}
      altButtonClick={handleRegisterClick}
      isValid={isValid}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          placeholder="Email"
          required
          name="email"
          id="inputEmail"
          minLength="1"
          maxLength="30"
          value={emailValue}
          onChange={onEmailChange}
        />
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__input"
          placeholder="Password"
          required
          name="password"
          id="inputPassword"
          type="password"
          value={passwordValue}
          onChange={onPasswordChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default SignModal;

// 8823import React, { useState, useCallback } from "react";
// import ModalWithForm from "./ModalWithForm";
// // import { useForm } from "react-hook-form";

// const SiginModal = ({
//   isOpen,
//   handleCloseModal,
//   handleOutClick,
//   handleSignin,
//   handleSignupClick,
//   isLoading,
//   isValid,
//   errorMessage,
//   setErrorMessage,
// }) => {
//   const [emailValue, setEmail] = useState("");
//   const [passwordValue, setPassword] = useState("");

//   const buttonTexts = {
//     button: isLoading ? "Saving..." : "Sign in",
//     other: "Sign up",
//   };

//   // const {
//   //   register,
//   //   handleSubmit,
//   //   formState: { errors, isValid },
//   // } = useForm();
//   // console.log(register);
//   const onSubmit = useCallback(
//     (e) => {
//       console.log(e);
//       e.preventDefault();
//       handleSignin(emailValue, passwordValue);
//       // handleSignin(email, password);
//     },
//     [emailValue, passwordValue, handleSignin]
//   );

//   React.useEffect(() => {
//     if (isOpen) {
//       setEmail("");
//       setPassword("");
//     }
//   }, [isOpen]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const card = {};
//     card.email = emailValue;
//     card.password = passwordValue;
//   };

//   const onEmailChange = (evt) => {
//     setEmail(evt.target.value);
//   };

//   const onPasswordChange = (evt) => {
//     setPassword(evt.target.value);
//   };

//   return (
//     <ModalWithForm
//       title="Sign in"
//       onClose={handleCloseModal}
//       buttonText={buttonTexts}
//       onOutClick={handleOutClick}
//       altButtonClick={handleSignupClick}
//       handleSubmit={handleSubmit}
//       isValid={isValid}
//       errorMessage={errorMessage}
//       setErrorMessage={setErrorMessage}
//     >
//       <label className="modal__label">
//         Email
//         <input
//           className="modal__input"
//           placeholder="Enter email"
//           type="text"
//           minLength="1"
//           maxLength="30"
//           value={emailValue}
//           onChange={onEmailChange}
//           // {...register("email", {
//           //   required: "This field is required",
//           //   maxLength: {
//           //     value: 30,
//           //     message: "Maximum length is 30 characters",
//           //   },
//           //   pattern: {
//           //     value:
//           //       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//           //     message: "Invalid email format",
//           //   },
//           // })}
//         />
//       </label>
//       {/* {errors.email && (
//         <span className="modal__errors">{errors.email.message}</span>
//       )} */}
//       <label className="modal__label">
//         Password
//         <input
//           className="modal__input"
//           placeholder="Enter password"
//           type="password"
//           minLength="1"
//           maxLength="300"
//           value={passwordValue}
//           onChange={onPasswordChange}
//           // {...register("password", {
//           //   required: "This field is required",
//           //   minLength: {
//           //     value: 8,
//           //     message: "Minimum length is 8 characters",
//           //   },
//           // })}
//         />
//       </label>
//       {/* {errors.password && (
//         <span className="modal__errors">{errors.password.message}</span>
//       )} */}
//     </ModalWithForm>
//   );
// };

// export default SiginModal;
