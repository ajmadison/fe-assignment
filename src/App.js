import React, { Component } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Selection from './components/Selection';
import ProductList from './components/ProductList';

export default class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch("https://demo3211013.mockable.io/ajmad")
      .then( res => res.json() )
      .then( res => this.setState({ products: res }) )
  }

  render() {

    return (
      <div className={styles.app}>
        <Header 
          title="Appliances Packages" 
          subcopy="Looking for a great deal on home appliances? Packages are the best bet. Most appliance packages consist of a range, a refrigerator, over-the-range microwave, and dishwasher. However some upscale brands have packages that incorporate wall ovens, cooktops, and integrated refrigerators."
        />
        <Selection />
        <ProductList products={this.state.products} />
      </div>
    );

  }
}
