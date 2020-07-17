import React, {useState, useEffect} from 'react';
import {ProductGrid} from './product_grid';
import {ProductFilters} from './product_filters';
// was getting CORS error when tryig to fetch data so hard coded so I could focus on styling. 
import {data} from '../data.js'
import '../stylesheets/browse_page.scss';

const BrowsePage = () => {

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch('https://www.ajmadison.com/product3.0/packages.index.json.php?sku=RF28R7351SR').then(response => {
      if (response && response.data && Array.isArray(response.data) && response.data.length > 0) {
        setProducts(response.data);
      }
    }).catch(() => {
        // use hard coded data if server doesn't send data back
        setProducts(data);
    })
  }, [])

  const handleChangeApplicancesDropdown = e => {
    const appliance = e.target.value;
    const produts = filteredProducts.length > 0 ? filteredProducts : data;
    const filtered = produts.filter(product => {
      for (let i = 0; i < product.items.length; i++) {
        if (product.items[i]['~product_type'] === appliance) {
          return true
        }
      }

      return false;
    });

    setFilteredProducts(filtered);
  }

  const handleClearFilters = () => setFilteredProducts([]);

  return (
    <div className="BrowsePage">
      <div className="BrowsePage-mainContent">
        <header className="BrowsePage-headerSection">
          <h1 className="BrowsePage-title">Appliance Packages</h1>
          <p className="BrowsePage-subTitle">Looking for a great deal on home appliances? Packages are the best bet. Most appliance packages consist of a range, refrigerator, over-the-range microwave, and dishwasher. However, some upscale brands have packages that incorporate wall ovens, cooktops, and integrated refrigerators.</p>
          <div className="BrowsePage-productFiltersWrapper">
            <ProductFilters
              handleChangeApplicancesDropdown={handleChangeApplicancesDropdown}
              handleClearFilters={handleClearFilters}
            /> 
          </div>
        </header>
        {products && (
          <div className="BrowsePage-productGridWrapper">
            <ProductGrid products={filteredProducts.length > 0 ? filteredProducts : data} />
          </div>
        )}
      </div>
      <div className="BrowsePage-showMoreWrapper">
        <button className="BrowsePage-showMore">Show More</button>
      </div>
    </div>
  );
}

export default BrowsePage;
