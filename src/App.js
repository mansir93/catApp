import React from 'react';

import Header from './components/Header';
import ShowCat from './components/ShowCat';

import './App.css';

const App = () => {
  return (
    <div  className='container'>

      <Header /> 

      <ShowCat /> 
      
    </div>
  )
}

export default App;
