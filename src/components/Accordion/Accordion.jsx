import React, {useState} from 'react';
import PropTypes from 'prop-types';


export default function Accordion({ name }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleClick = (e)=>{
    e.preventDefault();
    setIsAccordionOpen(!isAccordionOpen);
  }

  return (
    <>
      <button onClick={(e)=>handleClick(e)} className="Accordion">
        <span>{name}</span>
        <span className="plus-sign">+</span>
      </button>
    </>
  );
};

Accordion.propTypes = {
  name: PropTypes.string
};
