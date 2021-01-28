import React from 'react';
import styles from '../styles.css';

const CoinRow = ( { coinObj } ) => {
  console.log(`Styles: ${JSON.stringify(styles)}`);
  /*********************************************/
  /************ Render to DOM ******************/
  /*********************************************/
  return (
    <div className="coin-square">
      <p> Name : {coinObj.name} </p>
      <p> Current Price : {coinObj.quote.USD.price} </p>
    </div>
  )
};

export default CoinRow;