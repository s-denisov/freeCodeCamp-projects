import React from 'react';
import './App.css';
import Container from './Container';
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

export default App;
