import React from 'react';
import SingleCoin from './SingleCoin.jsx';

const CoinTable = ( { data } ) => {

  /*********************************************/
  /************ Render to DOM ******************/
  /*********************************************/
  return (
    <div className="coin-column">
      <div>
        {/* Here for styling */}
      </div>

      {data.slice(0,2).map((coinObj, ind) => {
        return <SingleCoin key={ind} coinObj={coinObj}/>;
      })}

      <div>
        {/* Here for styling */}
      </div>
    </div>
  )
};

export default CoinTable;