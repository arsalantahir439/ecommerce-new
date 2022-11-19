
import React, { useState } from 'react';
import {Routes} from 'react-router-dom';
import './scss/common.scss';
import GlobalContainer from './UI/global-container/global-container';
import './App.scss';
import Header from './component/layout/header/header';
import Containerbox from './globle-component/container';
import './scss/common.scss';


function App() {

  return (
    <div className="main-bg-color">
      <Header />
      <GlobalContainer className='global-container'>
        <Routes>
        </Routes>
      </GlobalContainer>
    
     <Containerbox />
      
    </div>
  );
}

export default App
