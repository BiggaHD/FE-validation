import React from 'react';
import useInput from '../hooks/useInput';

const SimpleInput = (props) => {
  const {
    reset: resetName,
    enteredValue: enteredName,
    blurHandler: nameInputBlurHandler,
    valueHandler: nameInputChangeHandler,
    inputIsValid: nameInputIsInvalid,
    enterdeValueIsValid: nameIsValid,
  } = useInput((value) => value.trim() !== '');
  const {
    reset: resetEmail,
    enteredValue: enteredEmail,
    blurHandler: emailInputBlurHandler,
    valueHandler: emailInputChangeHandler,
    inputIsValid: enteredEmailIsInvalid,
    enterdeValueIsValid: emailIsValid,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredName);

    resetName();
    resetEmail();
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = enteredEmailIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
