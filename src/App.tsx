
import React, { useState } from 'react';
import './scss/common.scss';
// import GlobalCard from './UI/globle-cards/global-card';
import DetailPage from './UI/detail-page/detail-page';

const shirts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function App() {

  return (
    <div >
      {/* <GlobalCard dataArray={shirts} /> */}
      <DetailPage/>
  
    </div>
  );
}

export default App;
