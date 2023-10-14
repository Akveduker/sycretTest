export const setValueFormAction = (state, { name, value }) => {
  return {
    ...state,
    [name]: {
      ...state[name],
      value,
    },
  };
};
