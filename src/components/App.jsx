import React, { useState, useEffect } from 'react';
import exampledata from '../example-request.json';
import CoinColumn from './CoinColumn.jsx';

const App = () => {
  /*********************************************/
  /******* Initialize State with Hooks *********/
  /*********************************************/
  const [cryptoData, updateData] = useState(exampledata.data);
  const [updatedTime, changeUpdatedTime] = useState(
    (exampledata.status.timestamp).slice(11, 19)
  );


  /*********************************************/
  /************ Render to DOM ******************/
  /*********************************************/
  return (
    <div className="app">

      <h1>
        Welcome to Liam's Crypto App!
      </h1>

      <br/>
      <br/>

      <CoinColumn
        data={cryptoData}
        />

      <h3>
        Reloaded at: {updatedTime} GMT
      </h3>

    </div>
  );
};

export default App;