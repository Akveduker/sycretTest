import { formInitialState } from "constants/form/formInitialState/formInitialState";
import { useReducer } from "react";
import { formValReducerActions } from "utils/reducers/reducerActionsNames/formValidation/formValReducerActions";
import { formValidationReducer } from "utils/reducers/reducers/formValidationReducer";
export const useCrateFormState = () => {
  const [state, dispatch] = useReducer(formValidationReducer, formInitialState);

  const validateValue = (name) => {
    return dispatch({
      type: formValReducerActions.validateValue,
      payload: {
        name,
      },
    });
  };

  const setFullState = (state) => {
    return dispatch({
      type: formValReducerActions.setFullState,
      payload: state,
    });
  };

  const setValue = (name, value) => {
    return dispatch({
      type: formValReducerActions.setValue,
      payload: {
        name,
        value,
      },
    });
  };
  return [
    state,
    {
      validateValue,
      setFullState,
      setValue,
    },
  ];
};
