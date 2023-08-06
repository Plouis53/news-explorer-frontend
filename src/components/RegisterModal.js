import React from "react";
import ModalWithForm from "./ModalWithForm";
import { useForm } from "react-hook-form";

const RegisterModal = ({
  closeModal,
  handleOutClick,
  handleSigninClick,
  handleSignup,
  isLoading,
  errorMessage,
  setErrorMessage,
}) => {
  const buttonTexts = {
    button: isLoading ? "Saving..." : "Sign up",
    other: "Sign in",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = ({ email, password, name }) => {
    handleSignup(email, password, name);
  };

  return (
    <ModalWithForm
      title="Sign up"
      onClose={closeModal}
      buttonText={buttonTexts}
      onOutClick={handleOutClick}
      altButtonClick={handleSigninClick}
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
      <label className="modal__label">
        Username
        <input
          className="modal__input"
          placeholder="Enter your username"
          type="text"
          {...register("name", {
            required: "This field is required",
            minLength: {
              value: 2,
              message: "Minimum length is 8 characters",
            },
            maxLength: {
              value: 30,
              message: "Maximum length is 30 characters",
            },
          })}
        />
      </label>
      {errors.name && (
        <span className="modal__errors">{errors.name.message}</span>
      )}
    </ModalWithForm>
  );
};

export default RegisterModal;
