import { valValueWithValArr } from "../valValueWithValArr/valValueWithVallArr";

export const validateFullFormState = (state) => {
  const newState = {};
  let isValid = true;
  for (const key in state) {
    const inputValue = state[key];
    const validationResult = valValueWithValArr(
      inputValue.value,
      inputValue.validators
    );
    if (typeof validationResult === "object" || !validationResult)
      isValid = false;
    newState[key] = {
      ...inputValue,
      validation: validationResult,
    };
  }
  return { newState, isValid };
};
