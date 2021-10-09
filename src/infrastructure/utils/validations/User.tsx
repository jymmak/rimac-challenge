import { User, ErroUser } from "../../../domain/models/User";

const isNumerb = /^[0-9]+$/;

export const validationUser = (infoUser: User, errorInfoUser: ErroUser) => {
  const { license, phone, terms, document } = infoUser;

  let {
    errorPhone,
    errorDocumentType,
    errorLicense,
    errorTerms,
    errorTextDocumentType,
    errorTextLicense,
    errorTextPhone,
    errorTextTerms,
    errorDocument,
    errorTextDocument,
  } = errorInfoUser;

  if (document === "") {
    errorDocument = true;
    errorTextDocument = "Ingrese nro. de documento";
  } else if (!document.match(isNumerb)) {
    errorDocument = true;
    errorTextDocument = "Ingrese nro. de documento válido";
  } else {
    errorDocument = false;
    errorTextDocument = "";
  }

  if (phone === " ") {
    errorPhone = true;
    errorTextPhone = "Ingrese celular";
  } else if (!phone.match(isNumerb)) {
    errorPhone = true;
    errorTextPhone = "Ingrese celular valido";
  } else {
    errorPhone = false;
    errorTextPhone = "";
  }

  if (license === "") {
    errorLicense = true;
    errorTextLicense = "Ingrese placa";
  } else {
    errorLicense = false;
    errorTextLicense = "";
  }

  if (!terms) {
    errorTerms = true;
    errorTextTerms = "Debe aceptar terminos";
  } else {
    errorTerms = false;
    errorTextTerms = "";
  }

  if (
    errorPhone ||
    errorTerms ||
    errorDocument ||
    errorLicense ||
    (errorPhone && errorTerms && errorDocument && errorLicense)
  ) {
    return {
      errorPhone,
      errorDocumentType,
      errorLicense,
      errorTerms,
      errorTextDocumentType,
      errorTextLicense,
      errorTextPhone,
      errorTextTerms,
      errorDocument,
      errorTextDocument,
    };
  } else {
    return false;
  }
};

export const formatToCurrency = (amount: string) => {
  if (amount === "" || amount === null) {
    amount = "0";
  }
  return parseFloat(amount)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
