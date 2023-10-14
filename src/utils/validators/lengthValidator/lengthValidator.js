export const lengthValidator = (string, length) => {
  if (string.length >= length) return true;
  return false;
};
