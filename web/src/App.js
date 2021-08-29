import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import UserContext, { UserProvider } from "./contexts/UserContext";
import { PokemonsProvider } from "./contexts/PokemonsContext";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PokemonList from "./pages/PokemonList";
import Pokemon from "./pages/Pokemon";
import MyPokemons from "./pages/MyPokemons";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <UserProvider>
            <UnprotectedRoute path="/sign-in" exact>
              <SignIn />
            </UnprotectedRoute>

            <UnprotectedRoute path="/sign-up" exact>
              <SignUp />
            </UnprotectedRoute>

            <PokemonsProvider>
              <ProtectedRoute path="/" exact>
                <PokemonList />
              </ProtectedRoute>

              <ProtectedRoute path="/pokemon/:id" exact>
                <Pokemon />
              </ProtectedRoute>

              <ProtectedRoute path="/my-pokemons" exact>
                <MyPokemons />
              </ProtectedRoute>
            </PokemonsProvider>
          </UserProvider>
        </Switch>
      </Router>
    </>
  );
}

function ProtectedRoute({ redirect = "/sign-in", ...props }) {
  const { token } = useContext(UserContext);

  if (!token) {
    return <Redirect to={redirect} />;
  }

  return <Route {...props} />;
}

function UnprotectedRoute({ redirect = "/", ...props }) {
  const { token } = useContext(UserContext);

  if (token) {
    return <Redirect to={redirect} />;
  }

  return <Route {...props} />;
}
