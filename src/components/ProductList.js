import React from 'react';
import styles from './ProductList.module.css';
import Product from './Product';

const ProductList = ({ products }) => (
    <div className={styles.container}>
        {products.map( (product, index) => (
            index < 12 &&
                <Product 
                    key={product.sku}
                    description={product.description}
                    discount={Math.round( product.prices.list_price - product.prices.final )}
                    brand={product.brand} 
                    finalPrice={product.prices.final}
                    listPrice={product.prices.list_price}
                    quickShip={product.is_quick_ship}
                    series={product.series}
                    src={`https://assets.ajmadison.com/${product.image.folder}/${product.image.filename}.jpg`}
                    url={product.url}
                />
        ) )}
    </div>
  );

export default ProductList;
