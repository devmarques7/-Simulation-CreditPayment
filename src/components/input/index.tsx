import { IInputProps } from '../../interfaces';
import { Container } from './style';

const Input = ({
  inputFor,
  placeExemplo,
  description,
  inputType,
  object,
  register,
}: IInputProps) => {
  return (
    <Container>
      <label htmlFor={inputFor}>{description}</label>
      <input
        placeholder={placeExemplo}
        type={inputType}
        {...register!(object!)}
      ></input>
    </Container>
  );
};

export default Input;
