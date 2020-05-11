// src/App.js
import Footer from './Footer';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <Footer />
    </div>
  );
}
export default App;