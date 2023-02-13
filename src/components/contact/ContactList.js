import React from 'react';
import '../../style.css';

import ContactItem from './ContactItem';

export default function ContactList(props) {
  return (
    <ul>
      {props.items.map((data) => {
        return <ContactItem key={data.id} data={data} />;
      })}
    </ul>
  );
}
