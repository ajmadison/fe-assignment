import React from 'react';
import { ReactComponent as Close } from '../../images/close.svg';
import SortBySelect from '../SortBySelect/SortBySelect';
import Accordion from '../Accordion/Accordion';
import PropTypes from 'prop-types';

export default function MobileMenu({ handleSortFilterClick }) {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className={'MobileMenu__container fade-in-transform'}>
      <h1>Sort & Filter</h1>

      <Close onClick={handleSortFilterClick} />

      <hr />

      <form className="MobileMenu__form">
        <div className="MobileMenu__select">
          <SortBySelect />
        </div>

        <label htmlFor="filter-by">Filter by</label>

        <div className="MobileMenu__button-wrapper">
          <button
            onClick={(e) => handleClick(e)}
            name="clear-all"
            className="btn btn--large text--green bg--white"
          >
            CLEAR ALL
          </button>

          <button
            onClick={(e) => handleClick(e)}
            name="apply"
            className="btn btn--large text--green"
          >
            APPLY
          </button>
        </div>

        <div className="MobileMenu__accordion">
          <Accordion name={'Appliance Type'} />
          <Accordion name={'Delivery Type'} />
        </div>
      </form>
    </div>
  );
};

MobileMenu.propTypes = {
  handleSortFilterClick: PropTypes.func
};
