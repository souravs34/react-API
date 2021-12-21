import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import PasswordChange from "./pages/PasswordChange";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";
import AllCocktails from "./pages/AllCocktails";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/allcocktails">
          {authCtx.isLoggedIn && <AllCocktails />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/cocktail/:id">
          {authCtx.isLoggedIn && <SingleCocktail />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/changepassword">
          {authCtx.isLoggedIn && <PasswordChange />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
