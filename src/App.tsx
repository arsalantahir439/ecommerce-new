
import React, { useState } from 'react';
import {Routes} from 'react-router-dom';
import './scss/common.scss';
import './App.scss';
import Header from './component/layout/header/header';
import Containerbox from './globle-component/container';
import './scss/common.scss';
import Footer from './component/layout/footer/footer';


function App() {

  return (
    <div className="">
      <Header />
    
     <Containerbox />

     <Footer />
      
    </div>
  );
}

export default App
