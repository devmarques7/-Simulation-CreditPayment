import Input from '../input';
import { Container, Form } from './style';
import { useForm } from 'react-hook-form';

const Inform = () => {
  const { register, handleSubmit } = useForm();

  const handleSection = (newTransaction: any) => {
    console.log(newTransaction);
  };

  return (
    <Container className="container-inform">
      <h1>Simulation of payment</h1>
      <Form onChange={() => handleSubmit(handleSection)}>
        <Input
          inputFor="value"
          description="Enter the amout to pay"
          placeExemplo="$ 1.000,00"
          inputType="number"
          {...register('amount')}
        ></Input>
        <div className="select installments">
          <label htmlFor="installments">How many installments</label>
          <select id="installments" {...register('installments')}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <Input
          inputFor="mdr"
          description="Enter the MDR percentage"
          placeExemplo="Ex : 3%"
          {...register('mdr')}
        ></Input>
      </Form>
    </Container>
  );
};

export default Inform;
