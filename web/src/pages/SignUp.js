import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Input from "../components/Input";
import Button from "../components/Button";

import UserContext from "../contexts/UserContext";

import Logo from "../assets/images/logo-pokedex.png";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { setToken } = useContext(UserContext);

  const history = useHistory();

  function submit(event) {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/sign-up`, {
        email,
        password,
        confirmPassword,
      })
      .then((response) => {
        setToken(response.data.token);
        history.push("/sign-in");
      });
  }

  return (
    <Page>
      <Container onSubmit={submit}>
        <img src={Logo} alt="Pokémon brand" />
        <Input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button>Sign Up</Button>
        <Link to="/sign-in" style={{ padding: "6px" }}>
          Already have an account? Log In
        </Link>
      </Container>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #e44141;
`;

const Container = styled.form`
  width: 100%;
  max-width: 400px;
  flex-direction: column;

  display: flex;
  justify-content: center;
  align-items: center;
`;
