import { formValidators } from "../formValidators/formValidators";

export const formInitialState = {
  name: {
    name: "name",
    value: "",
    validators: formValidators.name,
    validation: false,
  },
  phone: {
    name: "phone",
    value: "",
    validators: formValidators.phone,
    validation: false,
  },
  email: {
    name: "email",
    value: "",
    validators: formValidators.email,
    validation: false,
  },
};
