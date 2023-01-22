import { useContext } from 'react';
import { AppContext } from '../../context';
import { INote } from '../../interfaces';
import Note from '../note';
import { Container } from './style';

const Notifications = () => {
  const { notes, paySchedules } = useContext(AppContext);

  return (
    <Container>
      {notes.length > 0 ? (
        notes.map((note, index) => {
          if (paySchedules.days!) {
            return (
              <Note
                value_1={note[paySchedules.days![0] as keyof INote]}
                value_2={note[paySchedules.days![1] as keyof INote]}
                value_3={note[paySchedules.days![2] as keyof INote]}
                key={index}
              />
            );
          }
          return (
            <Note
              value_1={note[1]}
              value_2={note[15]}
              value_3={note[30]}
              value_4={note[90]}
              key={index}
            />
          );
        })
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Notifications;
