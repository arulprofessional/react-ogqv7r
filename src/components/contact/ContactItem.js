import React from "react";
import "../../style.css";

import classes from "./ContactItem.module.css";
import Card from "../ui/Card";

export default function ContactItem(props) {
  return (
    <li key={props.id} className={classes.item}>
      <Card>
        <div className={classes.item}>
          <h3>{props.data.title}</h3>
          <h4>{props.data.name}</h4>
          <h4>{props.data.mobileNumber}</h4>
          <h4>{props.data.email}</h4>
          <address>{props.data.address}</address>
          <p>{props.data.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
}
