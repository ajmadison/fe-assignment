import React, { useEffect, useState, useRef } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
import SortBySelect from './components/SortBySelect/SortBySelect';
import 'typeface-roboto';

const url = 'https://demo3211013.mockable.io/ajmad';

function App() {
  const [products, setProducts] = useState({
    items: [],
    visible: 8,
  });

  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const appRef = useRef();

  useEffect(() => {
    if (isMobileMenuVisible) {
      appRef.current.style.position = 'fixed';
    } else {
      appRef.current.style.position = 'relative';
    }
  }, [isMobileMenuVisible]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts((prev) => ({
        ...prev,
        items: [...data],
      }));
    }

    fetchData();
  }, []);

  const showMore = () => {
    setProducts((prev) => {
      return {
        ...prev,
        visible: prev.visible + 4,
      };
    });
  };

  const handleSortFilterClick = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <main ref={appRef} className="App__container">
      {isMobileMenuVisible && (
        <MobileMenu
          handleSortFilterClick={handleSortFilterClick}
          isMobileMenuVisible={isMobileMenuVisible}
        />
      )}
      <Header />

      <section className="App__sort-filter-menu">
        {/* mobile  */}
        <div className="App__sort-filter-menu--mobile">
          <button
            onClick={handleSortFilterClick}
            className="btn btn--large btn--sort-filter"
          >
            SORT & FILTER
          </button>

          <span className="App__pagination">
            ({`1-${products.visible} of ${products.items.length} Items`})
          </span>
        </div>

        {/* desktop */}
        <div className="App__sort-filter-menu--desktop">
          <form>
            <div className="App__select">
              <label htmlFor="select-appliances">Select Appliances</label>

              <select name="select-appliances" id="">
                <option value="highest-price">4 Appliances Selected</option>
                <option value="highest-price">3 Appliances Selected</option>
                <option value="highest-price">2 Appliances Selected</option>
              </select>
            </div>

            <div className="App__select">
              <SortBySelect />
            </div>

            <div className="App__checkbox">
              <label htmlFor="delivery-method">Delivery method</label>
              <input
                value={'deliveryMethodValue'}
                type="checkbox"
                name="delivery-method"
                id="delivery-method"
              />
              <span>Quick Ship</span>
            </div>
          </form>

          <button
            type="button"
            // onClick={showMore}
            className="btn btn--large btn--clear-all text--green"
          >
            CLEAR ALL
          </button>
        </div>
      </section>

      <section className="App__card-container">
        {products &&
          products.items &&
          // create a new array of n items. Map them to render
          products.items.slice(0, products.visible).map((item, index) => {
            return (
              <div className="App__card fade-in" key={index}>
                <ProductCard product={item} />
              </div>
            );
          })}
      </section>

      {products.visible < products.items.length && (
        <button
          type="button"
          onClick={showMore}
          className="btn btn--large btn--show-more text--green"
        >
          SHOW MORE
        </button>
      )}
    </main>
  );
}

export default App;
