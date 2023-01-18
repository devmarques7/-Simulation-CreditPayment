import Link from '../link';
import { Container } from './style';
import { IProps } from '../../interfaces';

const Header = ({ WebTitle }: IProps) => {
  return (
    <Container>
      <span className="header-title">{WebTitle}</span>
      <Link content="Sair" to="/" />
    </Container>
  );
};

export default Header;
