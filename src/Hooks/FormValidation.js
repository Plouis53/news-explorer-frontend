import { useState, useRef } from "react";

const FormValidation = () => {
  const formRef = useRef(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  };

  return {
    formRef,
    values,
    handleChange,
    errors,
    isValid,
    setValues,
    setIsValid,
  };
};

export default FormValidation;
