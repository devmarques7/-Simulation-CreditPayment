import { ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface IProps {
  content?: string;
  to?: string;
  WebTitle?: string;
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
}

export interface INoteValue {
  value_1: number | undefined;
  value_2: number | undefined;
  value_3: number | undefined;
  value_4?: number | undefined;
  keyValue: number;
}

export interface INote {
  1?: number;
  15?: number;
  30?: number;
  90?: number;
}

export interface IProvider {
  children: ReactNode;
}

export interface IInputProps {
  inputFor: string;
  placeExemplo?: string;
  description?: string;
  inputType?: string;
  object: string;
  register?: UseFormRegister<any>;
}

export interface IResponse {
  amount: number;
  installments: number;
  mdr: number;
  days?: number[];
}

export interface ISubmitData {
  amount: number;
  installments: number;
  mdr: number;
  one: string;
  three: string;
  two: string;
}

export interface IAppProvider {
  notes: INote[];
  show: boolean;
  ErrMessage: string;
  paySchedules: IResponse;
  setNotes: React.Dispatch<React.SetStateAction<INote[]>>;
  handleAddNote: (newNote: INote) => void;
  toggleShow: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleData: (data: ISubmitData) => IResponse;
  setCustom: React.Dispatch<React.SetStateAction<boolean>>;
  custom: boolean;
}
