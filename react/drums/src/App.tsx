import React from 'react';
import './App.css';
import Machine from './Machine';
import { Provider } from 'react-redux';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Machine />
    </Provider>
  );
};

export default App;
