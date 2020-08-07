import React from 'react';
import './header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="product-listing_header">
                <h1>Appliance Packages</h1>
                <p>Looking for a great deal on home appliances? Packages are the best bet. Most appliance packages consist of a range, refrigerator, over-the-range microwave, and dishwasher. However, some upscale brands have packages that incorporate wall ovens, cooktops, and integrated refrigerators.</p>
            </div>
          );
    }
}

export default Header;