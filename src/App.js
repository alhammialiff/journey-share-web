import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
// import { ConfigureStore } from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <MainComponent />
          </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
