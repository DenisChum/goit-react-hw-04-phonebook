import React, { useState } from 'react';
import {
    Form,
    Label,
    Input,
    Button
} from './FormAddContact.styled';


export default function FormAddContact ({ onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');



const handleSubmit = e => {
    e.preventDefault();
    
    onSubmit({ name, number });
    resetForm();
};

const resetForm = () => {
    setName('');
    setNumber('');
};

   const handleChange = e => {
    const prop = e.currentTarget.name;
    switch (prop) {
        case 'name':
            setName(e.currentTarget.value);
            break;
        case 'number':
            setNumber(e.currentTarget.value);
            break;
        default:
            throw new Error('Error');
    }
};


    return (
    <Form onSubmit={handleSubmit}>
        <Label>
            Name
        <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required />
        </Label>

        <Label>
            Number
        <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            required />
        </Label>
        <Button type="submit">
            Add contact
        </Button>
    </Form>
    );
}

