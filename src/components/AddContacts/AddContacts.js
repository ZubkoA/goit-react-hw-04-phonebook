import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './AddContacts.module.css';

const AddContacts = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className={css.container__form} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name</label>

      <input
        type="text"
        name="name"
        id={nameId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        value={name}
        required
      />
      <label htmlFor={numberId}>Number</label>
      <input
        type="tel"
        name="number"
        id={numberId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
        value={number}
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default AddContacts;

// export class AddContacts extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameId = nanoid();
//   numberId = nanoid();

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };
//   handleSubmit = e => {
//     console.log(this.state);
//     e.preventDefault();
//     this.props.addContact({ ...this.state });
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };
//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={css.container__form} onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameId}>Name</label>
//         <input
//           type="text"
//           name="name"
//           id={this.nameId}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           onChange={this.handleChange}
//           value={name}
//           required
//         />
//         <label htmlFor={this.numberId}>Number</label>
//         <input
//           type="tel"
//           name="number"
//           id={this.numberId}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           onChange={this.handleChange}
//           value={number}
//           required
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }
