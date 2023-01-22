import { createContext, useEffect, useState } from 'react';
import {
  IAppProvider,
  INote,
  IProvider,
  IResponse,
  ISubmitData,
} from '../interfaces';

export const AppContext = createContext<IAppProvider>({} as IAppProvider);

const AppProvider = ({ children }: IProvider) => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [show, toggleShow] = useState(false);
  const [ErrMessage, setMessage] = useState('');
  const [paySchedules, setpaySchedule] = useState<IResponse>({} as IResponse);

  const handleAddNote = (newNote: INote) => {
    setNotes([...notes, newNote]);
  };

  const handleData = (data: ISubmitData) => {
    const newData: IResponse = {
      amount: data.amount,
      installments: data.installments,
      mdr: data.mdr,
      days: [Number(data.one), Number(data.two), Number(data.three)],
    };

    const validateInput = newData.days?.filter((number) => number !== 0);

    if (!validateInput?.length) {
      const newData: IResponse = {
        amount: data.amount,
        installments: data.installments,
        mdr: data.mdr,
      };
      setpaySchedule(newData);
      return newData;
    }

    setpaySchedule(newData);
    return newData;
  };

  useEffect(() => {
    setNotes(notes);
  }, [notes]);

  return (
    <AppContext.Provider
      value={{
        notes,
        setNotes,
        handleAddNote,
        show,
        toggleShow,
        ErrMessage,
        setMessage,
        handleData,
        paySchedules,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
