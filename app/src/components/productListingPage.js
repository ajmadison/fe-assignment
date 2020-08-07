import React from 'react';
import './productListingPage.scss';
import Header from './header';
import Filter from './filter';
import ProductListing from './productListing';

class ProductListingPage extends React.Component {
    render() {
        return (
            <div className="product-landing">
              <Header />
              <Filter />
              <ProductListing />
            </div>
          );
    }
}

export default ProductListingPage;
