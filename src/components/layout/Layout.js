import classes from "./Layout.module.css";

export default function Layout(props) {
  return <div className={classes.main}>{props.children}</div>;
}
