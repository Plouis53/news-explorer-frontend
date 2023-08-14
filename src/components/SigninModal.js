import React from "react";
import ModalWithForm from "./ModalWithForm";
import { useForm } from "react-hook-form";

const SigninModal = ({
  onClose,
  handleOutClick,
  handleSignin,
  handleRegisterClick,
  isLoading,
  errorMessage,
  setErrorMessage,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    handleSignin(data);
  };

  const buttonClasses = {
    mainButton: "modal__login",
    altButton: "modal__other",
  };

  const buttonTexts = {
    button: isLoading ? "Saving..." : "Sign in",
    other: "or Sign up",
  };

  return (
    <ModalWithForm
      title="Sign in"
      name="Signin"
      onClose={onClose}
      buttonText={buttonTexts}
      onOutClick={handleOutClick}
      handleSubmit={handleSubmit(onSubmit)}
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
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address.",
            },
          })}
        />
      </label>
      {errors.email && (
        <span className="modal__error-message">{errors.email.message}</span>
      )}
      <label className="modal__label">
        Password
        <input
          className="modal__input"
          placeholder="Password"
          required
          {...register("password", { required: "Password is required." })}
          type="password"
        />
      </label>
      {errors.password && (
        <span className="modal__error-message">{errors.password.message}</span>
      )}
    </ModalWithForm>
  );
};

export default SigninModal;
