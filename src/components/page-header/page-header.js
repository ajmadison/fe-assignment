import React from 'react';

import {TITLE, DESC} from './constants';
import './page-header.scss';

export const PageHeader = () => {
    return (
        <div className='page-header'>
            <div className='page-header--title'>
                {TITLE}
            </div>
            <div className='page-header--desc'>
                {DESC}
            </div>
        </div>
    );
};

