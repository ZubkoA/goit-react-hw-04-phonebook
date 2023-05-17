import React from 'react';
import css from './ListElement.module.css';

const ListElement = ({ deleteContact, number, name, id }) => {
  return (
    <>
      <p className={css.contacts__text}>
        {name}: {number}
      </p>
      <button
        type="button"
        className={css.contacts__btn}
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default ListElement;
