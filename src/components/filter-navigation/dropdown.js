import React from 'react';

import {} from './constants';
import './filter-navigation.scss';

export const Dropdown = ({options, isMultiSelect}) => {
    return (
        <div className='dropdown'>
            <select className='dropdown--select'>
                {options.map((value) => {
                    return (
                        <option className='dropdown--option'>{value}</option>
                    );
                })}
            </select>
            <div className='dropdown--arrow'></div>
        </div>
    );
};

