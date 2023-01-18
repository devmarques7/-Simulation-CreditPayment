import { IProps } from '../../interfaces';
import { Container } from './style';
import { useNavigate } from 'react-router-dom';

const Link = ({ content, to }: IProps) => {
  const navigate = useNavigate();
  return <Container onClick={() => navigate(to!)}>{content}</Container>;
};

export default Link;
