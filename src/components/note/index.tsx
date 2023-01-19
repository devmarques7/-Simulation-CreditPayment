import { Container } from './style';

const Notes = () => {
  return (
    <Container>
      <div className="mark" />
      <div className="note">
        <div className="note-enabled">
          <span className="day">Tomorrow</span>
          <span className="value">R$ 993,00</span>
        </div>
        <div className="note-disabled">
          <div className="info">
            <span className="day">In 15 days</span>
            <span className="value">R$ 995,00</span>
          </div>
          <div className="info">
            <span className="day">In 30 days</span>
            <span className="value">R$ 995,00</span>
          </div>
          <div className="info">
            <span className="day">In 90 days</span>
            <span className="value">R$ 995,00</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Notes;
