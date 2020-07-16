import React from 'react';
import quirksShipImage from './quickship-pdp.png';
import '../stylesheets/product_card.scss';

export const ProductCard = ({
  product: {
    image, 
    description, 
    prices, 
    is_quick_ship, 
    url
  }}) => {

  const getFormattedPrice = price => {
    const priceArray = price.toString().split('.');
    const dollars = priceArray[0];
    const cents = priceArray[1] ? (priceArray[1] + '00').slice(0, 2) : '00';
    return `$${dollars}.${cents}`;
  }

  return (
    <div className="ProductCard">
      <div className="ProductCard-imageWrapper">
        <div style={
          {backgroundImage: `url(https://assets.ajmadison.com/${image.folder}/${image.filename}.jpg)`, 
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '0px',
          paddingTop: '90%'}} 
          className="ProductCard-image" 
          alt="appliances">
        </div>
      </div>
      <div className="ProductCard-productDetailsWrapper">
        <>
          <p className={`ProductCard-description ${!is_quick_ship ? 'ProductCard--hasFourLines' : ''}`}>{description}</p>
          {is_quick_ship && (
            <img alt="quick ship" className="ProductCard-quickShipLogo" src={quirksShipImage}></img>
          )}
        </>
        <>
          <p className="ProductCard-price">{getFormattedPrice(prices.final)}</p>
          <div className="ProductCard-savePriceWrapper">
            <p className="ProductCard-saveAmount">{`Save ${getFormattedPrice(prices.list_price - prices.final)}`}</p>
            <p className="ProductCard-listPrice">{`${getFormattedPrice(prices.list_price)}`}</p>
          </div>
        </>
        <button className="ProductCard-viewPackage">
          <a target="_blank" rel="noopener noreferrer" href={`https://ajmadison.com${url}`}>View Package</a>
        </button>
      </div>
    </div>
  )
}