import React, { useState,useEffect, Fragment, useMemo } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

import FormAddContact from './FormAddContact/FormAddContact';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { Container, Title, SecondTitle } from './App.styled';

function App () {
    const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(
            contacts));
    }, [contacts]);

    const onAddContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    if (
    contacts.some(
        contact => contact.name.toLowerCase() === normalizedName
    )
    ) {
    Notify.failure(`${name} is exist already in contacts`);
    return;
    }
    
    const contact = {
    id: nanoid(),
    name,
    number,
    };
    setContacts(prev => [...prev, contact]);
};
    
const handleDelete = id => {
   setContacts(contacts => contacts.filter(contact => contact.id !== id));
};
const handleFilter = e => {
    setFilter(e.currentTarget.value.trim());
};
    
const filterContacts = useMemo(() => {
    return contacts.length
    ? contacts.filter(({ name }) => {
        return name.toLowerCase().includes(filter.toLowerCase());
        })
    : [];
}, [contacts, filter]);

 
    
    return (
        <Fragment>
            <Container>
                <Title>Phonebook</Title>                
                    <FormAddContact onSubmit={onAddContact} />                
                <SecondTitle>Contacts</SecondTitle>                                   
                    <Filter handleFilter={handleFilter}
                    value={filter} />
                    <ContactList contacts={filterContacts}
                    handleDelete={handleDelete}/>                
            </Container>
        </Fragment>
    );
}

export default App;