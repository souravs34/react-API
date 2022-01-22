import PasswordForm from "./PasswordForm";
import classes from "./PasswordChange.module.css";

const PasswordChange = () => {
  return (
    <section className={classes.profile}>
      <h1>Change Password Here!</h1>
      <PasswordForm />
    </section>
  );
};

export default PasswordChange;
