import React from "react";
import { InputSelect, InputText, InputCheckbox } from "../Inputs";
import { useForm, useErrorForm } from "../../hooks/useForm";
import { validationUser } from "../../utils/validations/User";
import { useHistory } from "react-router-dom";

const LoginForm: React.FC = () => {
  const history = useHistory();
  const { form, onChange, onChangeChecked, onReset } = useForm({
    document: "",
    phone: "",
    license: "",
    documentType: 1,
    terms: false,
  });

  const { errorForm, onChangeError, onResetError } = useErrorForm({
    errorDocumentType: false,
    errorTextDocumentType: "",
    errorPhone: false,
    errorTextPhone: "",
    errorLicense: false,
    errorTextLicense: "",
    errorTerms: false,
    errorTextTerms: "",
    errorDocument: false,
    errorTextDocument: "",
  });

  const handleSubmit = () => {
    const validatorUser = validationUser(form, errorForm);

    if (validatorUser) {
      onChangeError(validatorUser);
    } else {
      onResetError();
      onReset();
      history.push(`/plan`);
    }
  };
  return (
    <div className="wrapper">
      <div className="container">
        <form>
          <h3>Déjanos tus datos</h3>

          <InputSelect
            nameType="documentType"
            nameDocument="document"
            document={form.document}
            onChange={onChange}
            typeDocument={form.documentType}
          />
          {errorForm.errorDocument && (
            <div className="text_error">{errorForm.errorTextDocument}</div>
          )}

          <InputText
            placeholder="Celular"
            onChange={onChange}
            type="text"
            value={form.phone}
            name="phone"
            maxLength={9}
          />
          {errorForm.errorPhone && (
            <div className="text_error">{errorForm.errorTextPhone}</div>
          )}
          <InputText
            placeholder="Placa"
            onChange={onChange}
            type="text"
            value={form.license}
            name="license"
            maxLength={6}
          />
          {errorForm.errorLicense && (
            <div className="text_error">{errorForm.errorTextLicense}</div>
          )}

          <InputCheckbox
            checked={form.terms}
            onChange={onChangeChecked}
            name="terms"
            label="Acepto la"
            underline="Política de Protecciòn de Datos Personales y los Términos y Condiciones."
          />
          {errorForm.errorTerms && (
            <div className="text_error">{errorForm.errorTextTerms}</div>
          )}

          <button
            type="submit"
            className="general_button"
            onClick={handleSubmit}
          >
            COTÍZALO
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
