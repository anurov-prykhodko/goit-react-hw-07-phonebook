import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import {
  deleteContact,
  toggleCompleted,
} from '../../redux/phonebook/contacts-operations';
import { getVisibleContacts } from '../../redux/phonebook/contacts-selectors';

const ContactList = ({ contacts, onDeleteContact, onToggleCompleted }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number, completed }) => (
      <li key={id} className={classNames(s.item, { [s.completed]: completed })}>
        <input
          type="checkbox"
          className={s.checkbox}
          checked={completed}
          onChange={() => onToggleCompleted({ id, completed: !completed })}
        />
        <p className={s.text}>
          {name}: {number}
        </p>
        <button
          type="button"
          className={s.pug}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
};

// ===== Без селекторов =====

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase().trim();

//   return allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId => dispatch(deleteContact(contactId)),
  onToggleCompleted: contactId => dispatch(toggleCompleted(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);