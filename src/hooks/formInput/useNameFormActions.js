export const useNameFormActions = (name, actions) => {
  return {
    ...actions,
    setValue: (value) => actions.setValue(name, value),
    validateValue: (value) => actions.validateValue(name, value),
  };
};
