import Inform from '../../components/form';
import Header from '../../components/header';
import { Container } from './style';

const Dashboard = () => {
  return (
    <Container>
      <Header WebTitle="Bank" />
      <main>
        <Inform />
      </main>
    </Container>
  );
};

export default Dashboard;
