import React, { useState, useEffect } from 'react';
import exampledata from '../example-request.json';
import CoinTable from './CoinTable.jsx';
import axios from 'axios';

const RELOAD_INTERVAL_MINUTES = 1;

const App = () => {
  /*********************************************/
  /******* Initialize State with Hooks *********/
  /*********************************************/
  const [cryptoData, updateData] = useState([]);
  const [updatedTime, changeUpdatedTime] = useState('');
  const [requestFailed, updateRequestStatus] = useState(false);



  /*********************************************/
  /***** Helper Function to Get API Info *******/
  /*********************************************/
  const getCoinData = () => {
    // Make axios request to Crypto API
    axios({
      method: 'get',
      url: 'http://localhost:4444/apikey'
    })
    .then(resp => {
      /******** Successful API request ************/
      console.log(`Response received from Express (Coin API)!`);

      // Update Data
      updateData(resp.data.data);

      // Update Time Stamp
      changeUpdatedTime(resp.data.status.timestamp.slice(11, 19));
    })
    .catch(err => {
      /******** Error in API request **************/
      console.log(`404 Received from Express (error in hitting API)`);

      // Use example data
      updateData(exampledata.data);

      changeUpdatedTime((exampledata.status.timestamp).slice(11, 19));

      // Flip state to notify user example data is being used
      updateRequestStatus(true);
    })
  }

  /*********************************************/
  /***** Setup Interval to make Requests *******/
  /*********************************************/
  useEffect(() => {
    // Make first call when page mounts
    getCoinData();

    // Set up interval to repeatedly call
    const interval = setInterval(() => {

      //console.log('This will run every 2 minutes!');
      getCoinData();

    }, 60000 * RELOAD_INTERVAL_MINUTES);
    return () => clearInterval(interval);

  }, []);

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

      <CoinTable
        data={cryptoData}
      />

      <h3>
        Reloaded at: {updatedTime} GMT
      </h3>
      <h4>
        Updates every {RELOAD_INTERVAL_MINUTES} minute(s)
      </h4>

      {requestFailed ? (
        <h2>
          API Request Failed! Example data being shown
        </h2>
      ) : (
        <>
        </>
      )}

    </div>
  );
};

export default App;