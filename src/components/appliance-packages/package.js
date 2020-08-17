import React from 'react';
import {Responsive} from '../../helpers/responsive';
import {formatMoney} from './helpers';
import {VIEW_PACKAGE} from './constants';
import './package.scss';

export const Package = ({image, brand, series, desc, isQuickship, prices, url}) => {
    const imgBase = 'https://assets.ajmadison.com/';
    const imgSrc = imgBase + image.folder + '/' + image.filename;

    const calcDiscount = (list, final) => {
        const discount = prices.list_price - prices.final;
        return formatMoney.format(discount);
    }

    return (
        <div className='package'>
            <div className='package--image-container'>
                <img className='package--image' src={imgSrc}/>
            </div>
            <div className='package--info-container'>
                <Responsive maxWidth={770}>
                    <div className='package--price'>
                        <div className='package--sales-price'>{formatMoney.format(prices.final)}</div>
                        <span className='package--discount'>Save {calcDiscount(prices.list_price, prices.fina)}</span>
                        <span className='package--list-price'>{formatMoney.format(prices.list_price)}</span>
                    </div>
                </Responsive>
                <div className='package--desc-block'>
                    <span className='package--brand'>{brand} </span>
                    <span className='package--series'>{series} </span>
                    <span className='package--desc'>{desc}</span>
                </div>
                {isQuickship &&
                    <div className='package--quickship'></div>
                }

                <Responsive minWidth={771}>
                    <div className='package--price'>
                        <div className='package--sales-price'>{formatMoney.format(prices.final)}</div>
                        <span className='package--discount'>Save {calcDiscount(prices.list_price, prices.fina)}</span>
                        <span className='package--list-price'>{formatMoney.format(prices.list_price)}</span>
                    </div>

                    <div className='package--btn'>
                        <a className='package--link' href={url}>{VIEW_PACKAGE}</a>
                    </div>
                </Responsive>
            </div>
        </div>
    );
};

