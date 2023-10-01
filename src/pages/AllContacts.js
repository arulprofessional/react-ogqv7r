import { useState, useEffect } from "react";
import "../style.css";

import ContactList from "../components/contact/ContactList";

import Layout from "../components/layout/Layout";

export default function AllContactsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-ccd14-default-rtdb.firebaseio.com/contacts.json",
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

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  let content = <p>You got no Contacts. Start adding some?</p>;
  if (contactList && contactList.length > 0) {
    if (contactList[0].id == "error") {
      let txt = "";
      for (let x in contactList[0]) {
        txt += contactList[0][x];
      }
      content = <p>There is a problem connecting to Firebase! {txt}</p>;
    } else {
      content = <ContactList items={contactList} />;
    }
  }

  return (
    <Layout>
      <h1>All Contacts Page</h1>
      {content}
    </Layout>
  );
}
