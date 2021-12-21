import PasswordForm from "./PasswordForm";
import classes from "./PasswordChange.module.css";

const PasswordChange = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <PasswordForm />
    </section>
  );
};

export default PasswordChange;
