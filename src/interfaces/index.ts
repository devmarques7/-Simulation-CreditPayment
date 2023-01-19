import { FieldValues, SubmitHandler, UseFormRegister } from 'react-hook-form';

export interface IProps {
  content?: string;
  to?: string;
  WebTitle?: string;
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
}

export interface IInputProps {
  inputFor: string;
  placeExemplo?: string;
  description?: string;
  inputType?: string;
  object: string;
  register?: UseFormRegister<any>;
}

export interface IResponse extends SubmitHandler<FieldValues> {
  amount: string;
  installments: string;
  mdr: string;
}
