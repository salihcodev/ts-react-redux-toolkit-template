// pkgs:

// utils:
import "./style.sass";

// components:

// interfaces:
interface CompProps {
  type: string;
  label: string;
  inputName: string;
  collectInputData: (name: string, value: string) => void;
  otherProps?: any;
}

const FormInput: React.VFC<CompProps> = ({
  type,
  inputName,
  label,
  collectInputData,
  ...otherProps
}) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={inputName}>{label}</label>
      <input
        type={type}
        name={inputName}
        {...otherProps}
        onChange={(e) => collectInputData(e.target.name, e.target.value)}
      />
    </div>
  );
};

export default FormInput;
