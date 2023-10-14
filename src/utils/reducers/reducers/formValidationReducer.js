import { formValReducerActions } from "../reducerActionsNames/formValidation/formValReducerActions";
import { setValueFormAction } from "../reducersActions/formValidation/setValueFormAction/setValueFormAction";
import { validateValueFormAction } from "../reducersActions/formValidation/validateValueFormAction/validateValueFormAction";

export const formValidationReducer = (state, action) => {
  switch (action.type) {
    case formValReducerActions.setValue:
      return setValueFormAction(state, action.payload);
    case formValReducerActions.validateValue:
      return validateValueFormAction(state, action.payload);
    case formValReducerActions.setFullState:
      return action.payload;
    default:
  }
};
