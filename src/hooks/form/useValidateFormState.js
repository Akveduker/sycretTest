import { routesNames } from "constants/router/routsNames";
import { storageNames } from "constants/storage/storageNames";
import { useNavigate } from "react-router-dom";
import { validateFullFormState } from "utils/reducers/actionsHelpers/formValidation/validateFullFormState/validateFullFormState";

export const useValidateFormState = (state, setNewState) => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const { isValid, newState } = validateFullFormState(state);
    if (isValid) {
      let formValues = Object.keys(state).reduce((prev, key) => {
        const stateValue = state[key];
        prev[stateValue["name"]] = stateValue["value"];
        return prev;
      }, {});
      localStorage.setItem(storageNames.userData, JSON.stringify(formValues));
      return navigate(`/${routesNames.payment}`);
    }
    setNewState(newState);
  };
  return onSubmit;
};
