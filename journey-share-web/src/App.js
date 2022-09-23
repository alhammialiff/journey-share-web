import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { ConfigureStore } from './redux/configureStore';

function App() {
  return (
    <div className="App">
      <MainComponent/>
    </div>
  );
}

export default App;
