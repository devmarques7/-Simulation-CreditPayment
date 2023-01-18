import { IProps } from '../../interfaces';
import { Container } from './style';
import { useNavigate } from 'react-router-dom';

const Button = ({ content }: IProps) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate('/dashboard')}>{content}</Container>
  );
};

export default Button;
