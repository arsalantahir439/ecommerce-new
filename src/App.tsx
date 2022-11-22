
import React, { useState } from 'react';
import './scss/common.scss';
// import GlobalCard from './UI/globle-cards/global-card';
import DetailPage from './UI/detail-page/detail-page';
import { Routes } from 'react-router-dom';
import './scss/common.scss';
import './App.scss';
import Header from './component/layout/header/header';
import './scss/common.scss';
import Footer from './component/layout/footer/footer';

const shirts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function App() {

  return (
    <div>
        <Header />
      <DetailPage />
        <Footer />
    </div>
  );
}

export default App
