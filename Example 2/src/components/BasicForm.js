import React from 'react';
import useInput from '../hooks/useInput';

const BasicForm = (props) => {
  const {
    reset: resetName,
    enteredValue: nameValue,
    blurHandler: nameBlurHandler,
    valueHandler: nameInputHandler,
    hasError: nameInputError,
    enterdeValueIsValid: enteredNameIsValid,
  } = useInput((value) => value !== '');
  const {
    reset: resetLastname,
    enteredValue: lastnameValue,
    blurHandler: lastnameBlurHandler,
    valueHandler: lastnameInputHandler,
    hasError: lastnameInputError,
    enterdeValueIsValid: enteredLastnameIsValid,
  } = useInput((value) => value !== '');
  const {
    reset: resetEmail,
    enteredValue: emailValue,
    blurHandler: emailBlurHandler,
    valueHandler: emailInputHandler,
    hasError: emailInputError,
    enterdeValueIsValid: enteredEmailIsValid,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredLastnameIsValid && enteredEmailIsValid)
    formIsValid = true;

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(`${nameValue} ${lastnameValue}: ${emailValue}`);
    resetName();
    resetLastname();
    resetEmail();
  };

  const classesName = nameInputError ? 'form-control invalid' : 'form-control';
  const classesLastname = lastnameInputError
    ? 'form-control invalid'
    : 'form-control';
  const classesEmail = emailInputError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={classesName}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputHandler}
            onBlur={nameBlurHandler}
            value={nameValue}
          />
          {nameInputError && (
            <p className="error-text">Please enter a valid name.</p>
          )}
        </div>
        <div className={classesLastname}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastnameValue}
            onChange={lastnameInputHandler}
            onBlur={lastnameBlurHandler}
          />
          {lastnameInputError && (
            <p className="error-text">Plase enter a valid lastname.</p>
          )}
        </div>
      </div>
      <div className={classesEmail}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailInputHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailInputError && (
          <p className="error-text">Plase enter a valid e-mail.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
