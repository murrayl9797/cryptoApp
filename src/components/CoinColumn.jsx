import React from 'react';
import CoinRow from './CoinRow.jsx';

const CoinColumn = ( { data } ) => {

  /*********************************************/
  /************ Render to DOM ******************/
  /*********************************************/
  return (
    <div className="coin-column">
      <div>
        {/* Here for styling */}
      </div>

      {data.slice(0,2).map((coinObj, ind) => {
        return <CoinRow key={ind} coinObj={coinObj}/>;
      })}

      <div>
        {/* Here for styling */}
      </div>
    </div>
  )
};

export default CoinColumn;