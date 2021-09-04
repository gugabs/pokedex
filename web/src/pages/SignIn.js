import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Input from "../components/Input";
import Button from "../components/Button";

import UserContext from "../contexts/UserContext";

import logo from "../assets/images/logo-pokedex.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useContext(UserContext);
  const history = useHistory();

  function submit(event) {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, {
        email,
        password,
      })
      .then((res) => {
        setToken(res.data);
        history.push("/");
      });
  }

  return (
    <Page>
      <Container onSubmit={submit}>
        <img src={logo} alt="Logo" />
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
        <Button>Sign In</Button>
        <Link to="/sign-up" style={{ padding: "6px" }}>
          Don't have an account? Sign Up
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
