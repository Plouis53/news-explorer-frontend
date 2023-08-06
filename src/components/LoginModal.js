import React from "react";
import ModalWithForm from "./ModalWithForm";
import { useForm } from "react-hook-form";

const LoginModal = ({
  closeModal,
  handleOutClick,
  handleSignin,
  handleSignupClick,
  isLoading,
  errorMessage,
  setErrorMessage,
}) => {
  const buttonTexts = {
    button: isLoading ? "Saving..." : "Sign in",
    other: "Sign up",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    handleSignin(email, password);
  };

  return (
    <ModalWithForm
      title="Sign in"
      onClose={closeModal}
      buttonText={buttonTexts}
      onOutClick={handleOutClick}
      altButtonClick={handleSignupClick}
      handleSubmit={handleSubmit(onSubmit)}
      isValid={isValid}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          placeholder="Enter email"
          type="text"
          {...register("email", {
            required: "This field is required",
            maxLength: {
              value: 30,
              message: "Maximum length is 30 characters",
            },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email format",
            },
          })}
        />
      </label>
      {errors.email && (
        <span className="modal__errors">{errors.email.message}</span>
      )}
      <label className="modal__label">
        Password
        <input
          className="modal__input"
          placeholder="Enter password"
          type="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Minimum length is 8 characters",
            },
          })}
        />
      </label>
      {errors.password && (
        <span className="modal__errors">{errors.password.message}</span>
      )}
    </ModalWithForm>
  );
};

export default LoginModal;
