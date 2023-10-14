export const valValueWithValArr = (value, validators) => {
  for (let i = 0; i < validators.length; i++) {
    const validator = validators[i];
    const validationResult = validator(value);
    if (typeof validationResult === "boolean") continue;
    return validationResult;
  }
  return true;
};
