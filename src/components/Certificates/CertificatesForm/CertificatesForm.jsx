import React from "react";
import FormInput from "components/Form/FormInput/FormInput";
import { useCrateFormState } from "hooks/form/useCreateFormState";
import { useValidateFormState } from "hooks/form/useValidateFormState";
import FormInputUi from "ui/inputs/FormInputUi/FormInputUi";
import MaskedInput from "ui/inputs/MaskedInput/MaskedInput";
import s from "./CertificatesForm.module.scss";
import ForwardButton from "ui/buttons/ForwardButton/ForwardButton";

const CertificatesForm = () => {
  const [state, actions] = useCrateFormState();
  const onSubmit = useValidateFormState(state, actions.setFullState);
  return (
    <form onSubmit={onSubmit} className={s["container"]}>
      <h3 className={s["container__title"]}>Заполните свои данные</h3>
      <FormInput
        name="name"
        state={state.name}
        actions={actions}
        title={"Имя *"}
      >
        <FormInputUi type={"text"} placeholder={"Введите..."} />
      </FormInput>
      <FormInput
        name="phone"
        state={state.phone}
        actions={actions}
        title={"Телефон *"}
      >
        <MaskedInput />
      </FormInput>
      <FormInput
        name="email"
        state={state.email}
        actions={actions}
        title={"Почта *"}
      >
        <FormInputUi type={"text"} placeholder={"Example@mail.ru"} />
      </FormInput>
      <div>
        <ForwardButton>Оплатить</ForwardButton>
      </div>
    </form>
  );
};

export default CertificatesForm;
