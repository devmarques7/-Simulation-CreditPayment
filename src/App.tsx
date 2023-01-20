import React, { useContext } from 'react';
import Toast from './components/modals';
import { AppContext } from './context';
import Routes from './routes';
import Global from './style/global';

function App() {
  const { show } = useContext(AppContext);
  return (
    <>
      {show && <Toast />}
      <Routes />
      <Global />
    </>
  );
}

export default App;
