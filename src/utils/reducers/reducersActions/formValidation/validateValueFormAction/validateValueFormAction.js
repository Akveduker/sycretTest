import { valValueWithValArr } from "utils/reducers/actionsHelpers/formValidation/valValueWithValArr/valValueWithVallArr";

export const validateValueFormAction = (state, { name }) => {
  const { value, validators } = state[name];
  const validationResult = valValueWithValArr(value, validators);
  return {
    ...state,
    [name]: {
      ...state[name],
      validation: validationResult,
    },
  };
};
