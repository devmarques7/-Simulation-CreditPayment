import Button from '../../components/button';
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
      <Button content="Get Started" />
    </Container>
  );
};

export default LandingPage;
