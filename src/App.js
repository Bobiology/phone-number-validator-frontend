import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import DataList from './DataList';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1> INTERNATIONAL PHONE NUMBER VALIDATION SERVICE - UI</h1>
      </div>
      <div className='phone-container'>
      <DataList />
      </div>
    </div>
  );
}

export default App;
