import React, { useState, useEffect } from 'react';
import ContactList from '../components/contact/ContactList';
import Layout from '../components/layout/Layout';

import '../style.css';
// import spinner from '../images/spinner.gif';
import spinner from '../images/1_CsJ05WEGfunYMLGfsT2sXA.gif';

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
        setTimeout(() => {
          setIsLoading(false);
          setContactList(contacts);
        }, 3000);
      });
  }, []);

  let content = (
    <section>
      {/* <img src={spinner} alt="Loading-Spinner" /> */}
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
        alt="Loading-Spinner"
      />
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
