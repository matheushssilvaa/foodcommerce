import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Layout = styled.div `

    display: flex;
    flex-direction: row;
    height: 100vh;
    align-items: center;

    .section-one{
        width: 50%;
        background-color: rgb(133 29 0);
        height: 100vh;
        display: flex;
        align-items: center;
    }

    .section-one > img {
        width: 50%;
    }

    .content-section-one {
        display: flex;
        flex-direction: column;
        margin: 100px;
    }

    #register {
        background-color: ${(theme.colors.gray500)};
        font-weight: 800;
        font-size: 15px;
        color: #fff;
        border: none;
        cursor: pointer;
        font-size: 20px;
        padding: 15px;
    }

    .form-section {
        width: 50%;
        display: flex;
        justify-content: center;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    form > input {
        padding: 15px;
    }

    form > label {
        margin: 10px;
    }


`