import React from 'react';
import '../../style.css';

export default function ContactItem(props) {
  return (
    <li key={props.id}>
      <div>
        <h3>{props.data.title}</h3>
        <span>{props.data.name}</span>
        <span>{props.data.mobileNumber}</span>
        <span>{props.data.email}</span>
        <address>{props.data.address}</address>
        <p>{props.data.description}</p>
      </div>
    </li>
  );
}
