import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import s from './App.module.css';

function App() {
  const totalContactsCount = useSelector(
    state => state.mainState.contacts.length,
  );
  const completeContactsCount = useSelector(state =>
    state.mainState.contacts.reduce(
      (acc, contacts) => (contacts.completed ? acc + 1 : acc),
      0,
    ),
  );

  return (
    <div className={s.container}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <p className={s.text}>All contacts: {totalContactsCount}</p>
      <p className={s.text}>Number of selected: {completeContactsCount} </p>

      <ContactForm />
      <h2 className={s.mainTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;

// ===== ЧЕРЕЗ CONNECT =====

// App.propTypes = {
//   totalContactsCount: PropTypes.number.isRequired,
//   completeContactsCount: PropTypes.number.isRequired,
// };

// const mapStateToProps = state => {
//   return {
//     totalContactsCount: state.mainState.contacts.length,
//     completeContactsCount: state.mainState.contacts.reduce(
//       (acc, contacts) => (contacts.completed ? acc + 1 : acc),
//       0,
//     ),
//   };
// };

// {
//   "contacts": [
//     {
//       "id": "id-1",
//       "name": "Olexsii Anyrov",
//       "number": "000-23-26",
//       "completed": false
//     },
//     {
//       "id": "id-2",
//       "name": "Mark Titan",
//       "number": "459-12-56",
//       "completed": false
//     },
//     {
//       "id": "id-3",
//       "name": "Elena Tsapliuk",
//       "number": "567-45-00",
//       "completed": false
//     }
//   ],
//   "filter": ""
// }
