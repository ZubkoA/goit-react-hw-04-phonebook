import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <form>
      <label className={css.filter__text}>
        Find contacts by name
        <input type="text" name="filter" value={value} onChange={onChange} />
      </label>
    </form>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
export default Filter;
