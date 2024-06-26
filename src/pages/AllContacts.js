import React, { useState, useEffect } from 'react';
import '../style.css';

import ContactList from '../components/contact/ContactList';

import Layout from '../components/layout/Layout';

export default function AllContactsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-started-ccd14-default-rtdb.firebaseio.com/contacts.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const contacts = [];

        for (const key in data) {
          const contact = {
            id: key,
            ...data[key],
          };
          contacts.push(contact);
        }
        setIsLoading(false);
        setContactList(contacts);
      });
  }, []);

  let content = (
    <section>
      <p>Loading...</p>
    </section>
  );
  if (!isLoading) {
    content = (
      <div>
        <h1>All Contacts Page</h1>
        <ContactList items={contactList} />
      </div>
    );
  }

  return <Layout>{content}</Layout>;
}
