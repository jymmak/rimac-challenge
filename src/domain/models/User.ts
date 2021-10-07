export type User = {
  documentType: number;
  document: string;
  phone: string;
  license: any;
  terms: boolean;
};

export type ErroUser = {
  errorDocumentType: boolean;
  errorTextDocumentType: string;
  errorPhone: boolean;
  errorTextPhone: string;
  errorLicense: boolean;
  errorTextLicense: string;
  errorTerms: boolean;
  errorTextTerms: string;
  errorDocument: boolean;
  errorTextDocument: string;
};
