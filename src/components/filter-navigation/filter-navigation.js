import React from 'react';
import {Dropdown} from './dropdown';
import {Responsive} from '../../helpers/responsive';
import {
    SELECT_APPLIANCE,
    APPLIANCE_OPTIONS,
    SORT_BY,
    DELIVERY_METHOD,
    QUICK_SHIP,
    HIGHEST_PRICE,
    SORT_BY_OPTIONS, CLEAR_ALL
} from './constants';
import './filter-navigation.scss';

export const FilterNavigation = () => {
    return (
        <div className='filter-nav'>
            <Responsive maxWidth={770}>
                <button className='filter-nav--open-btn'>SORT & FILTER</button>
                <div className='filter-nav--modal'></div>
            </Responsive>
            <Responsive minWidth={771}>
                <div className='filter-nav--group'>
                    <div className='filter-nav--title'>
                        {SELECT_APPLIANCE}
                    </div>

                    <Dropdown
                        options={APPLIANCE_OPTIONS}
                        isMultiSelect={true}
                    />
                </div>
                <div className='filter-nav--group'>
                    <div className='filter-nav--title'>
                        {SORT_BY}
                    </div>
                    <Dropdown
                        options={SORT_BY_OPTIONS}
                    />
                </div>
                <div className='filter-nav--group'>
                    <div className='filter-nav--title'>
                        {DELIVERY_METHOD}
                    </div>
                    <div className='filter-nav--checkbox'>
                        <input type="checkbox" id="quickship" name="quickship" />
                        <label htmlFor="quickship">{QUICK_SHIP}</label>
                    </div>
                </div>
                <button className='filter-nav--btn'>
                    {CLEAR_ALL}
                </button>
            </Responsive>
        </div>
    );
};

