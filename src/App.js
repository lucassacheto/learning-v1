import {useState} from 'react'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';
import { btnType } from './btn-helper'

function App() {

  return (
    <div className="App">
      
      <Header />
      <Content btnType={btnType} />
      <Footer />

    </div>
    

  );
}

export default App;
