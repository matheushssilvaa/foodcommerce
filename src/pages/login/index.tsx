import React, { useEffect, useState } from "react";
import { FormLogin } from "../../components/loginForm";
import { Layout } from "./style";
import logo from '../../assets/logo.png'

export default function Login() {
    return (
        <Layout>
            <div className="section-one">
                <div className="content-section-one">
                    <img src={logo} />
                    <button id="register">Cadastre-se</button>
                </div>
            </div>
            <div className="form-section">
                <FormLogin />
            </div>
        </Layout>
    )
}