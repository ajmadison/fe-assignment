import React from 'react';
import styles from './Product.module.css';

const Product = ({
    brand,
    description,
    discount,
    finalPrice,
    listPrice,
    quickShip,
    series,
    src,
    url
}) => (
    <div className={styles.container}>
        <img className={styles.image} src={src} alt={brand} />
        <p className={styles.description}><span className={styles.brand}>{brand} {series} </span>{description}</p>
        {quickShip && <img className={styles["quick-ship"]} alt="quick shipping available" src="../../quickship-pdp.png" />}
        <p className={styles["final-price"]}>${finalPrice}</p>
        <p className={styles["list-price-container"]}>
            <span className={styles.discount}>Save ${discount} </span><span className={styles["list-price"]}>${listPrice}</span>
        </p>
        <div className={styles["view-package"]}>
            <a 
                className={styles["view-package-link"]} 
                href={`https://ajmadison.com/${url}`} 
                target="_blank" 
                rel="noopener noreferrer">View Package
            </a>
        </div>
    </div>
);

export default Product;
