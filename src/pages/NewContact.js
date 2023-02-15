import { useNavigate } from "react-router-dom";
import "../style.css";

import NewContactForm from "../components/contact/NewContactForm";

import Layout from "../components/layout/Layout";

export default function NewContactPage() {
  const navigate = useNavigate();
  function addContactHandler(contactData) {
    fetch(
      "https://react-getting-started-ccd14-default-rtdb.firebaseio.com/contacts.json",
      {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  }
  return (
    <Layout>
      <h1>New Contact Page</h1>
      <NewContactForm onAddContact={addContactHandler} />
    </Layout>
  );
}
