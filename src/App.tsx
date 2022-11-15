import React, { useState } from 'react';
import './scss/common.scss';
import GlobalContainer from './UI/global-container/global-container';

function App() {

  return (
    <div className="main-bg-color" style={{ padding: '10px' }}>
      <button className="btn btn-secondary">ggggg</button>
      app
      <div className="secondary-bg-color" style={{ padding: '10px' }}>
        <button className="btn btn-priamry">ggggg</button>
      </div>
      <GlobalContainer>
        <button>this is button</button>
      </GlobalContainer>
    </div>
  );
}

export default App;
