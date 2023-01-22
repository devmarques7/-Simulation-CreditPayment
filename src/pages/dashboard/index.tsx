import Inform from '../../components/form';
import Header from '../../components/header';
import Notifications from '../../components/notifications';
import { Container } from './style';

const Dashboard = () => {
  return (
    <Container>
      <Header WebTitle="Bank" />
      <main>
        <Inform />
        <div className="notifications">
          <h1>Payment</h1>
          <div className="notifications-list">
            <Notifications />
          </div>
        </div>
      </main>
    </Container>
  );
};

export default Dashboard;
