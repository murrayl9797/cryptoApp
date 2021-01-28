import React from 'react';


const SingleCoin = ( { coinObj } ) => {

  /*********************************************/
  /****** Pull out vars and init formatter *****/
  /*********************************************/
  const coinName = coinObj.name;
  const currPrice = coinObj.quote.USD.price;
  // const change = -0.1 ; test if you'd like to certain font
  const change = coinObj.quote.USD.percent_change_24h / 100 ;
  const imagePath = `../../public/images/${coinName}Logo.png`;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


  /*********************************************/
  /************ Render to DOM ******************/
  /*********************************************/
  return (
    <div className="coin-square">
      {/********* Coin Image ************/}
      <div className="image-div">
        <img
          src={imagePath}
        />
      </div>

      <br/>
      <br/>


      <div className="text-info">
        {/********* Coin Name ************/}
        <div className="generic-text">
          Name:{' '}
          <span className="coin-info name">
            {coinName}
          </span>
        </div>

        {/******* Current Price **********/}
        <div className="generic-text">
          Current Price (USD):{' '}
          <span className="coin-info price">
            {formatter.format(currPrice)}
          </span>
        </div>

        {/******* Percent Change *********/}
        <div className="generic-text">
          24 Hour Change:{' '}
          {change >= 0 ? (
            <span className="coin-info positive-change">
              {"+" + formatter.format(change*currPrice)}
            </span>
          ) : (
            <span className="coin-info negative-change">
              {formatter.format(change*currPrice)}
            </span>
          )
          }
        </div>
      </div>

    </div>
  )
};

export default SingleCoin;