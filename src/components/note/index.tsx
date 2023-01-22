import { useContext } from 'react';
import { INoteValue } from '../../interfaces';
import { Container } from './style';
import { AppContext } from '../../context';

const Note = ({ value_1, value_2, value_3, value_4 }: INoteValue) => {
  const { paySchedules } = useContext(AppContext);

  const handleRemove = (event: any) => {
    const note = event.target.parentNode;
    if (note.id === 'notification') {
      note.style.display = 'none';
    }
  };

  return (
    <Container
      className="note"
      onClick={(event) => handleRemove(event)}
      id="notification"
    >
      <div className="mark" />
      <div className="note-description">
        <div className="note-enabled">
          {paySchedules.days ? (
            <span className="day">{`In ${paySchedules.days![0]} days`}</span>
          ) : (
            <span className="day">Tomorrow</span>
          )}
          <span className="value">{`R$ ${value_1}`}</span>
        </div>
        <div className="note-disabled">
          <div className="info">
            {paySchedules.days! ? (
              <span className="day">{`In ${paySchedules.days![1]} days`}</span>
            ) : (
              <span className="day">In 15 days</span>
            )}
            <span className="value">{`R$ ${value_2}`}</span>
          </div>
          <div className="info">
            {paySchedules.days! ? (
              <span className="day">{`In ${paySchedules.days![2]} days`}</span>
            ) : (
              <span className="day">In 30 days</span>
            )}
            <span className="value">{`R$ ${value_3}`}</span>
          </div>

          {value_4 && (
            <div className="info">
              <span className="day">In 90 days</span>
              <span className="value">{`R$ ${value_4}`}</span>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Note;
