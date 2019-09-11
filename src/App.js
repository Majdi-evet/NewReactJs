import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Content from './Components/content';
import Footer from './Components/footer';
import Api from './Components/api';
import { tsConstructorType } from '@babel/types';
import { json } from 'body-parser';




function App() {
 

  return (
    <div className="App">
      
      <Header/>
      <Content/>
      <Footer/>
      <Api/>
     
     
    </div>
  );
/* } */
}


export default App;
