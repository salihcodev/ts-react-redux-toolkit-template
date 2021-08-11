// pkgs:

// utils:
import { FormInputInterface } from '../../../common/interfaces/comps/form-input.interface';
import './style.sass';

// comps:

// component>>>
const FormInput: React.VFC<FormInputInterface> = ({
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
