import styled from "styled-components";

export default styled.button`
    width: 100%;
    background-color: #FFCE31;
    color: #000;
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
    border-radius: 30px;
    margin-bottom: 11px;
    border: none;
    padding: 14px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        filter: brightness(1.1);
    }
`;
