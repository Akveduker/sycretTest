export const validatorWrapper = (message, callback) => {
  return (...params) => {
    const validationResult = callback(...params);
    if (validationResult) return validationResult;
    return {
      message,
      result: validationResult,
    };
  };
};
