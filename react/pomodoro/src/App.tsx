import React from 'react';
import { Provider } from 'react-redux';
import GlobalContainer from './GlobalContainer';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalContainer />
    </Provider>
  );
}

export default App;