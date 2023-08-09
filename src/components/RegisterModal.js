import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";

const RegisterModal = ({
  onClose,
  handleOutClick,
  handleSigninClick,
  handleSignup,
  isLoading,
  errorMessage,
  setErrorMessage,
  isValid,
}) => {
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [nameValue, setName] = useState("");

  const buttonClasses = {
    mainButton: "modal__login",
    altButton: "modal__other",
  };

  const buttonTexts = {
    button: isLoading ? "Saving..." : "Sign up",
    other: "Sign in",
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!emailValue || !passwordValue) {
      return;
    }
    const user = { email: emailValue, password: passwordValue };
    handleSignup(user);
  };

  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const onNameChange = (evt) => {
    setName(evt.target.value);
  };

  React.useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
  }, []);

  return (
    <ModalWithForm
      title="Sign up"
      name="Signup"
      onClose={onClose}
      buttonText={buttonTexts}
      onOutClick={handleOutClick}
      handleSubmit={handleSubmit}
      buttonClass={buttonClasses}
      altButtonClick={handleSigninClick}
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
      <label className="modal__label">
        Name
        <input
          className="modal__input"
          placeholder="Enter your username"
          required
          name="name"
          id="inputName"
          type="text"
          value={nameValue}
          onChange={onNameChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
