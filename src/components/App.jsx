import Header from './Header';
import { useState, useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import AddContacts from './AddContacts/AddContacts';
import { nanoid } from 'nanoid';
import css from './App.module.css';

import React from 'react';

const getContacts = () => {
  const localData = localStorage.getItem('contacts');
  const parsedData = JSON.parse(localData);
  if (parsedData) {
    return parsedData;
  } else return [];
};

const App = () => {
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const addContact = (name, number) => {
    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts.`)
      : setContacts(prev => [
          ...prev,
          {
            id: nanoid(),
            name,
            number,
          },
        ]);
  };
  const findFilter = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <div className={css.container}>
      <Header title="Phonebook" />
      <AddContacts addContact={addContact} />
      <Filter value={filter} onChange={handleChange} />
      <Header titleContacts="Contacts" />
      <ContactList contacts={findFilter()} deleteContact={deleteContact} />
    </div>
  );
};

export default App;

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const localData = localStorage.getItem('contacts');
//     const parsedData = JSON.parse(localData);

//     if (parsedData) {
//       this.setState({ contacts: parsedData });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const nextContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;

//     if (prevContacts !== nextContacts) {
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   }

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   addContact = data => {
//     const newContact = {
//       id: nanoid(),
//       ...data,
//     };
//     console.log(newContact);
//     this.state.contacts.some(contact => contact.name === newContact.name)
//       ? alert(`${newContact.name} is already in contacts.`)
//       : this.setState(prevState => {
//           return { contacts: [...prevState.contacts, newContact] };
//         });
//   };

//   findFilter = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   deleteContact = id => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(contact => contact.id !== id),
//       };
//     });
//   };

//   render() {
//     const { filter } = this.state;
//     const filterContacts = this.findFilter();
//     return (
//       <div className={css.container}>
//         <Header title="Phonebook" />
//         <AddContacts addContact={this.addContact} />
//         <Filter value={filter} onChange={this.handleChange} />
//         <Header titleContacts="Contacts" />
//         <ContactList
//           contacts={filterContacts}
//           deleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;
