import React from 'react';
import PropTypes from 'prop-types';
import ReactNumberFormat from '../utils/numberFormat';
import './product.scss';

class Product extends React.Component {
    render() {
        const { 
            imageFolder,
            imageFilename, 
            description,
            prices,
            sku,
            url
        } = this.props;
        // set savings valeu if price exists
        const savings = prices ? prices.list_price - prices.final : '';
        const link = `https://ajmadison.com${url}`; 
        if(prices){
        // render each product card on proeduct listing page separate for mobile or desktop layout
        return (
            <div className="product">
                <img className="product_image"src={`https://assets.ajmadison.com/${imageFolder}/${imageFilename}.jpg`} alt={sku} />
                <div className="product-content_desktop">
                    <p className="product-content_description">{description}</p>
                    <img className="product_quickshop" src="/imgs/quickship-pdp.png" alt="quickshop" width="79"/>
                    <p className="product-content_price product-content_price--final"><ReactNumberFormat  value={prices.final} /></p>
                    <p className="product-content_price product-content_price--savings">
                        <span className="product-content_price--discount"><ReactNumberFormat  value={savings} /></span> 
                        <span className="product-content_price--list"><ReactNumberFormat  value={prices.list_price} /></span>
                    </p> 
                    <a href={link}><button>View Package</button></a>
                </div>
                <div className="product-content_mobile">
                    <p className="product-content_price product-content_price--final"><ReactNumberFormat  value={prices.final} /></p>
                    <p className="product-content_price product-content_price--savings">
                        <span className="product-content_price--discount"><ReactNumberFormat  value={savings} /></span> 
                        <span className="product-content_price--list"><ReactNumberFormat  value={prices.list_price} /></span>
                    </p>
                    <p className="product-content_description">{description}</p>
                    <img className="product_quickshop" src="/imgs/quickship-pdp.png" alt="quickshop" width="79"/>     
                </div>
            </div>
          );
        }
        return null
    }
}

Product.propTypes = {
    imageFolder: PropTypes.string,
    imageFilename: PropTypes.string,
    description: PropTypes.string,
    prices: PropTypes.object,
    url: PropTypes.string,
    sku: PropTypes.string,
};

export default Product;