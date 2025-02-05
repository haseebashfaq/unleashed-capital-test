const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (!Validator.isLength(data.name, { min: 5 })) {
    errors.name = "Name should be of at least 5 characters";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }

  if (!Validator.isLength(data.password, { min: 8 })) {
    errors.password = "Password should be of at least 8 characters";
  }

  if (!(/\d/.test(data.password))) {
    errors.password = "Password must contain at least 1 number";
  }

  if (!(/[a-z]/.test(data.password)) && !(/[A-Z]/.test(data.password))) {
    errors.password = "Password must contain at least 1 character";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords don't match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
