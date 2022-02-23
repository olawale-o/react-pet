import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgSelect } from 'react-icons/cg';
import './style.scss';

const Filter = () => {
  console.log('filter');

  return (
    <div className="filter">
      <div className="content">
        <span className="icon">
          <AiOutlineSearch size={20} aria-label="search" color="#a11435" />
        </span>
        <input type="text" name="filter" className="input" placeholder="Filter listings" />
        <button type="button" className="btn">
          <span>From newest</span>
          <span>
            <CgSelect size={15} aria-label="select" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Filter;
