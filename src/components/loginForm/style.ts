import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const ContainerLogin = styled.div `

    display: flex;
    flex-direction: column;
    width: 70%;

    .container-form-login {
        display: flex;
        flex-direction: column;
    }

    form > input {
        height: 50px;
        margin: 5px;
        border-radius: 8px;
        padding: 15px;
    }

    #submit-login {
        background-color: ${(theme.colors.primary)};
        font-weight: 800;
        font-size: 15px;
        color: #fff;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        font-size: 20px;
        padding: 15px;
        display: flex;
        justify-content: center;
    }

    .forgot-password {
        margin-top: 20px;
    }

    .forgot-password > span {
        margin: 5px;
    }

    .forgot-password > a {
        color: ${(theme.colors.primary)};
    }

    .alter-authenticate {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 50px;
        font-weight: bold;
        font-size: 20px;
        padding: 5px;
    }

    .alter-authenticate > button {
        background-color: rgb(0 0 0 / 30%);
        color: #fff;
        border-radius: 8px;
        margin: 5px;
        justify-content: center;
        padding: 15px;
        border: #ccc;
        margin-left: 5px;
        display: flex;
        align-items: center;
    }

    .alter-authenticate > button > svg {
       margin-right: 10px;
    }

    h1 {
        padding: 5px;
    }

`