import Input from '../input';
import { Container, Form } from './style';
import { useForm } from 'react-hook-form';
import Link from '../link';
// import api from '../../services/api';
// import { IResponse } from '../../interfaces';

const Inform = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    // const jsonData = JSON.stringify(data);
    // const res = await api
    //   .post('', {
    //     header: 'content-type: application/json',
    //     data: jsonData,
    //   })
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
  };

  return (
    <Container className="container-inform">
      <h1>Simulation of payment</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          inputFor="value"
          description="Enter the amout to pay"
          placeExemplo="$ 1.000,00"
          inputType="number"
          register={register}
          object="amount"
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
          register={register}
          object="mdr"
        ></Input>
        <Link content="send" buttonType="submit"></Link>
      </Form>
    </Container>
  );
};

export default Inform;
