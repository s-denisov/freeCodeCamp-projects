import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Container from './Container';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

export default App;