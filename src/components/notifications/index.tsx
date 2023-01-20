import { useContext } from 'react';
import { AppContext } from '../../context';
import { INote } from '../../interfaces';
import Note from '../note';
import { Container } from './style';

const Notifications = () => {
  const { notes, paySchedules, custom, setCustom } = useContext(AppContext);

  return (
    <Container>
      {notes?.map((note, index) => {
        if (Object.keys(note).length === 3) {
          setCustom(true);
          return (
            <Note
              value_1={note[paySchedules.days![0] as keyof INote]}
              value_2={note[paySchedules.days![1] as keyof INote]}
              value_3={note[paySchedules.days![2] as keyof INote]}
              keyValue={index}
            />
          );
        }
        setCustom(false);
        return (
          <Note
            value_1={note[1]}
            value_2={note[15]}
            value_3={note[30]}
            value_4={note[90]}
            keyValue={index}
          />
        );
      })}
    </Container>
  );
};

export default Notifications;
