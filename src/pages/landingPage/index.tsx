import Link from '../../components/link';
import { Container } from './style';

const LandingPage = () => {
  return (
    <Container>
      <div className="description">
        <div className="title up">
          <h1>Creative Bank For</h1>
        </div>
        <div className="title down">
          <h1>Better, Faster, Smart People</h1>
        </div>
      </div>
      <Link content="Get Started" to="/dashboard" />
    </Container>
  );
};

export default LandingPage;
