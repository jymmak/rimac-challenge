interface SelectDocumentProps {
  nameType: string;
  onChange: any;
  typeDocument: number;
  nameDocument: string;
  document: string;
}

interface InputTextProps {
  type: string;
  value: string;
  placeholder: string;
  onChange: any;
  name: string;
  maxLength: any;
}

interface InputCheckedProps {
  checked: boolean;
  name: string;
  label: string;
  underline: string;
  onChange: any;
}

export const InputSelect = ({
  nameType,
  typeDocument,
  onChange,
  document,
  nameDocument,
}: SelectDocumentProps) => {
  return (
    <div className="content_select">
      <div className="select_form">
        <select name={nameType} value={typeDocument} onChange={onChange}>
          <option value={1}>DNI</option>
          <option value={2}>C.E</option>
        </select>
      </div>
      <div className="input_select">
        <input
          type="text"
          required
          value={document}
          name={nameDocument}
          onChange={onChange}
          placeholder="Nro. de doc"
          maxLength={8}
        ></input>
      </div>
    </div>
  );
};

export const InputText = ({
  type,
  placeholder,
  value,
  onChange,
  name,
}: InputTextProps) => {
  return (
    <div className="container_input_text">
      <input
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export const InputCheckbox = ({
  checked,
  onChange,
  name,
  label,
  underline,
}: InputCheckedProps) => {
  return (
    <div className="content_checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
      ></input>
      <label>
        {label}
        <p>{underline}</p>
      </label>
    </div>
  );
};
