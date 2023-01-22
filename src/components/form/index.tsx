import axios from 'axios';
import Link from '../link';
import Input from '../input';

import { useContext } from 'react';
import { Container, Form } from './style';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../context';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IResponse, ISubmitData } from '../../interfaces';

const Inform = () => {
  let paySchema = yup.object().shape({
    amount: yup.number().required(),
    installments: yup.number().required(),
    mdr: yup.number().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitData>({
    resolver: yupResolver(paySchema),
  });
  const { handleAddNote, toggleShow, setMessage, handleData } =
    useContext(AppContext);

  const onSubmit = async (data: ISubmitData) => {
    const newData: IResponse = handleData(data);
    await axios({
      method: 'post',
      url: 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app',
      data: newData,
    })
      .then((res) => handleAddNote(res.data))
      .catch((err) => {
        toggleShow(true);
        setMessage(err.response.data);
      });
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
        <div className="select-installments">
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
          inputType="number"
          register={register}
          object="mdr"
        ></Input>
        <div className="select-day">
          <label htmlFor="days" className="label">
            How many days
          </label>
          <div className="container-select">
            <select id="days" {...register('one')}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
              <option value="60">60</option>
              <option value="75">75</option>
              <option value="90">90</option>
            </select>
            <select id="days" {...register('two')}>
              <option value="0">0</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
              <option value="60">60</option>
              <option value="75">75</option>
              <option value="90">90</option>
            </select>
            <select id="days" {...register('three')}>
              <option value="0">0</option>
              <option value="30">30</option>
              <option value="45">45</option>
              <option value="60">60</option>
              <option value="75">75</option>
              <option value="90">90</option>
            </select>
          </div>
        </div>
        <Link content="send" buttonType="submit"></Link>
      </Form>
    </Container>
  );
};

export default Inform;
