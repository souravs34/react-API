import { Link } from "react-router-dom";
import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <h1>Welcome!</h1>

      <Link to="/allcocktails" className="btn btn-primary btn-details">
        Go To All Cocktails
      </Link>
    </section>
  );
};

export default StartingPageContent;
