import React, {useState, useEffect} from 'react';
import {Package} from './package';

import {API_URL, VIEW_PACKAGE} from './constants';
import './appliance-packages.scss';

export const AppliancePackages = () => {
    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [packages, setPackages] = useState({});

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPackages(result);
                    console.log(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Sorry, we encountered an error trying to load packages: {error.message}</div>
    } else {
        return (
            <div className='app-packages'>
                {Object.keys(packages).map((i) => {
                    const pkg = packages[i];
                    return (
                        <Package
                            key={pkg.sku}
                            image={pkg.image}
                            brand={pkg.brand}
                            series={pkg.series}
                            desc={pkg.description}
                            isQuickship={pkg.is_quick_ship}
                            prices={pkg.prices}
                            url={pkg.url}
                        />
                    )
                    })
                }
            </div>
        );
    }
};

