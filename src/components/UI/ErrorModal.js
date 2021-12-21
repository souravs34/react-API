import React from "react";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button
            type="button"
            class="btn btn-primary"
            onClick={props.onConfirm}
          >
            OKAY
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
