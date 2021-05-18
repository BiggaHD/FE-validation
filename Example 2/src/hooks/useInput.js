import { useState } from 'react';

function useInput(fn) {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const enterdeValueIsValid = fn(enteredValue);
  const hasError = !enterdeValueIsValid && isTouched;

  const valueHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const blurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    reset,
    enteredValue,
    blurHandler,
    valueHandler,
    hasError,
    enterdeValueIsValid,
  };
}

export default useInput;
