import React from 'react';
import {Provider} from 'react-redux';
import QuoteBox from './QuoteBox';
import 'bootstrap/dist/css/bootstrap.css';
import { store } from './store';

function App() {
  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <Provider store={store}>
          <QuoteBox />
        </Provider>
      </div>
    </div>
  );
}

export default App;
