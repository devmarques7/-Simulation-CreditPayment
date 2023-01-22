import { useContext, useEffect } from 'react';
import Link from '../../components/link';
import { AppContext } from '../../context';
import { Container } from './style';

const LandingPage = () => {
  const { setNotes } = useContext(AppContext);

  useEffect(() => {
    setNotes([]);
  });

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
