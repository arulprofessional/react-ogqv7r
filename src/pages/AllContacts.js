import React from "react";
import "../style.css";

import ContactList from "../components/contact/ContactList";

const DUMMY_DATA = [
  {
    id: "c1",
    title: "DUMMY_DATA 1",
    name: "Name 1",
    mobileNumber: "0123456789",
    email: "email1@gmail.com",
    address: "Address 1",
    description: "Description 1",
  },
  {
    id: "c2",
    title: "DUMMY_DATA 2",
    name: "Name 2",
    mobileNumber: "0123456789",
    email: "email2@gmail.com",
    address: "Address 2",
    description: "Description 2",
  },
];

export default function AllContactsPage() {
  return (
    <section>
      <h1>All Contacts Page</h1>
      <ContactList items={DUMMY_DATA} />
    </section>
  );
}
