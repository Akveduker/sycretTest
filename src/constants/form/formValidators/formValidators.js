import { emailValidator } from "utils/validators/emailValidator/emailValidator";
import { lengthValidator } from "utils/validators/lengthValidator/lengthValidator";
import { phoneValidator } from "utils/validators/phoneValidator/phoneValidator";
import { validatorWrapper } from "utils/validators/validatorWrapper/validatorWrapper";
export const formValidators = {
  name: [
    validatorWrapper("Имя слишком короткое", (string) =>
      lengthValidator(string, 4)
    ),
  ],
  phone: [validatorWrapper("Телефон слишком короткий", phoneValidator)],
  email: [
    validatorWrapper("Неправильный формат электронной почты", emailValidator),
  ],
};
