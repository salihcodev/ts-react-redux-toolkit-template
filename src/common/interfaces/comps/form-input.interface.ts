export interface FormInputInterface {
  type: string;
  label: string;
  inputName: string;
  collectInputData: (name: string, value: string) => void;
  otherProps?: any;
}
