import React from 'react';
import PropTypes from 'prop-types';
import quickship from '../../images/quickship-pdp.png';
import TextTruncate from 'react-text-truncate';
import useWindowSize from '../../hooks/useWindowSize';
function ProductCard({ product }) {
  const size = useWindowSize();

  const roundNum = (num) => {
    return (Math.round((num + Number.EPSILON) * 100) / 100).toFixed(2);
  };

  return (
    <section className="ProductCard__container">
      <div className="ProductCard__image">
        <img
          src={
            product &&
            product.image &&
            `https://www.ajmadison.com/${product.image.folder}/${product.image.filename}.${product.image.extension}`
          }
          alt="product"
        />
      </div>

      <div className="ProductCard__details-wrapper">
        <div className="ProductCard__price">
          ${roundNum(product && product.prices && product.prices.final)}
        </div>

        <div className="ProductCard__save-wrapper">
          <span className="ProductCard__save">
            Save $
            {roundNum(
              product &&
                product.prices &&
                product.prices.list_price - product.prices.final
            )}
          </span>
          <span className="ProductCard__strikethrough">
            ${roundNum(product && product.prices && product.prices.list_price)}
          </span>
        </div>

        <span>
          <span className="ProductCard__brand">
            {product && `${product.brand} `}
          </span>
          <TextTruncate
            text={product && `${product.description}`}
            truncateText="..."
            // only truncate text on mobile
            line={size.width < 720 ? 3 : 10}
            containerClassName="ProductCard__text"
            element="span"
          />
        </span>

        {/* code for dynamic render of quickship badge
        {product.is_quick_ship && (
          <img className="quickship-logo" src={quickship} alt="quick ship" />
        )} */}

        <img className="quickship-logo" src={quickship} alt="quick ship" />

        <button className="btn btn--small text--green btn--view-package">
          VIEW PACKAGE
        </button>
      </div>
    </section>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
