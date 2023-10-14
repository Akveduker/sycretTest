import { phoneMask } from "constants/mask/phoneMask";
import React from "react";
import InputMask from "react-input-mask";
import FormInputUi from "../FormInputUi/FormInputUi";
const MaskedInput = (props) => {
  return (
    <InputMask mask={phoneMask} {...props}>
      {(inputProps) => (
        <FormInputUi {...inputProps} placeholder={"+7 (___) ___-__-__"} />
      )}
    </InputMask>
  );
};

export default MaskedInput;
