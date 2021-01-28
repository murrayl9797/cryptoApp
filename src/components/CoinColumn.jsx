import React from 'react';
import CoinRow from './CoinRow.jsx';

const CoinColumn = ( { data } ) => {

  /*********************************************/
  /************ Render to DOM ******************/
  /*********************************************/
  return (
    <div className="coin-column">
      {data.slice(0,3).map((coinObj, ind) => {
        return <CoinRow key={ind} coinObj={coinObj}/>;
      })}
    </div>
  )
};

export default CoinColumn;