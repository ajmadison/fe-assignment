import React from 'react';
import './productListing.scss';
import Product from './product';

class productListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

    componentDidMount() {
        fetch("https://demo3211013.mockable.io/ajmad")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }  
    renderProducts = (items) => {
        const products = items.map(item =>
            <Product 
                imageFolder={item.image.folder}
                imageFilename={item.image.filename}
                description={item.description}
                prices={item.prices}
                url={item.url}
                sku={item.sku}
                key={item.sku}
                item
            />
        )
        return products;
    }
    

    render() {
        const items = this.state.items;
        
        return (
            <div className="product-listing">
                {this.renderProducts(items)}
            </div>
          );
    }
}

export default productListing;