import React from "react";
import "../../style.css";

import ContactItem from "./ContactItem";
import classes from "./ContactList.module.css";

export default function ContactList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((data) => {
        return <ContactItem key={data.id} data={data} />;
      })}
    </ul>
  );
}
