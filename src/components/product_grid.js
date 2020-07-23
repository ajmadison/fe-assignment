import React from 'react';
import {ProductCard} from './product_card';
import '../stylesheets/product_grid.scss';

export const ProductGrid = ({products}) => {  
  return (
    <div className="ProductGrid">
      {products.map(product => {
        return (
          <ProductCard key={product.sku} product={product} />
        )
      })}
    </div>
  )
}