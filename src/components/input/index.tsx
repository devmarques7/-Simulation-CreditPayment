import { IInputProps } from '../../interfaces';
import { Container } from './style';

const Input = ({
  inputFor,
  placeExemplo,
  description,
  inputType,
}: IInputProps) => {
  return (
    <Container>
      <label htmlFor={inputFor}>{description}</label>
      <input
        name={inputFor}
        placeholder={placeExemplo}
        type={inputType}
      ></input>
    </Container>
  );
};

export default Input;
