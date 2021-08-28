import styled from "styled-components";

import logo from "../assets/images/logo-pokedex.png";

export default function Header() {
    return (
        <Container>
            <img src={logo} alt="Logo" />
        </Container>
    );
}

const Container = styled.div`
    background: #E44141;
    text-align: center;
    padding: 10px 0;
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.2);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`;
