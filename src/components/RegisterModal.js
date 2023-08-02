import React from "react";
import ModalWithForm from "./ModalWithForm";
import { useForm } from "react-hook-form";

const RegisterModal = ({
  closeModal,
  handleOutClick,
  handleLoginClick,
  handleSignup,
  isLoading,
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

  const onSubmit = (data) => {
    console.log(data);
    closeModal();
  };

  return (
    <ModalWithForm
      title="Sign up"
      onClose={closeModal}
      buttonText={buttonTexts}
      onOutClick={handleOutClick}
      otherButtonClick={handleLoginClick}
      handleSubmit={handleSubmit(onSubmit)}
      isValid={isValid}
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
          {...register("username", {
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
      {errors.username && (
        <span className="modal__errors">{errors.username.message}</span>
      )}
    </ModalWithForm>
  );
};

export default RegisterModal;
