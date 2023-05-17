import React from 'react';
import PropTypes from 'prop-types';
import ListElement from '../ListElement/ListElement';
import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <ul className={css.contacts}>
    {contacts.map(({ name, id, number }) => (
      <li className={css.contacts__item} key={id}>
        <ListElement
          name={name}
          number={number}
          id={id}
          deleteContact={deleteContact}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
export default ContactList;
