import { removePhoneSpecChars } from "utils/phone/removePhoneSpecChars";

export const phoneValidator = (phone) => {
  const formatedPhone = removePhoneSpecChars(phone);
  if (formatedPhone.length === 11) return true;
  return false;
};
