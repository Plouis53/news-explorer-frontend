import React from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useForm } from 'react-hook-form';

const RegisterModal = ({
  onClose,
  handleOutClick,
  handleSigninClick,
  handleSignup,
  isLoading,
  errorMessage,
  setErrorMessage
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm();

  const onSubmit = (data) => {
    handleSignup(data.email, data.password, data.name);
  };

  const buttonClasses = {
    mainButton: 'modal__login',
    altButton: 'modal__other'
  };

  const buttonTexts = {
    button: isLoading ? 'Saving...' : 'Sign up',
    other: 'Sign in'
  };

  return (
    <ModalWithForm
      title="Sign up"
      name="Signup"
      onClose={onClose}
      buttonText={buttonTexts}
      onOutClick={handleOutClick}
      handleSubmit={handleSubmit(onSubmit)}
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
          {...register('email', {
            required: 'Email is required.',
            maxLength: {
              value: 30,
              message: 'Maximum length is 30 characters'
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address.'
            }
          })}
        />
      </label>
      {errors.email && <span className="modal__error-message">{errors.email.message}</span>}
      <label className="modal__label">
        Password
        <input
          className="modal__input"
          placeholder="Password"
          required
          type="password"
          {...register('password', {
            required: 'Password is required.',
            minLength: {
              value: 4,
              message: 'Minimum length is 8 characters'
            }
          })}
        />
      </label>
      {errors.password && <span className="modal__error-message">{errors.password.message}</span>}
      <label className="modal__label">
        Name
        <input
          className="modal__input"
          placeholder="Enter your username"
          required
          {...register('name', {
            required: 'Name is required.',
            minLength: {
              value: 2,
              message: 'Minimum length is 2 characters'
            },
            maxLength: {
              value: 30,
              message: 'Maximum length is 30 characters'
            }
          })}
        />
      </label>
      {errors.name && <span className="modal__error-message">{errors.name.message}</span>}
    </ModalWithForm>
  );
};

export default RegisterModal;
