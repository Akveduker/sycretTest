export const removePhoneSpecChars = (phone) => {
  return phone.replace(/[()\-+_\s]/g, "");
};
