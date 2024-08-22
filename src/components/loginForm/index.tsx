import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerLogin } from "./style";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { toast } from "react-toastify";

export function FormLogin() {
    
    const [login, setLogin] = useState<boolean>(false);
    const navigate = useNavigate()

    function activateButtonLogin() {
        setLogin(true);
    }

    async function handleSubmitLogin(event: any) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const email = formData.get('email')?.toString();
        const password = formData.get('password')?.toString();

        console.log({ email, password });

        const sendData = { email, password }

        if(!email || !password) {
            toast.warn('Preencha o email e senha')
        }

        try {
            const response = await axios.post('http://localhost:3002/auth/signin', sendData);
            const token = response.data.token;
            if (token) {
                localStorage.setItem('token', token);
                toast.success(`Bem vindo ${email}`);
                navigate('/')
            } else {
                toast.error('500 Server error');
            }
            } catch (error) {
                toast.error('Ocorreu um erro ao tentar fazer login.');
            } finally {
                setLogin(false);
        }

    }

    return (
        <ContainerLogin>
            <h1>Acesse sua conta</h1>
            <div className="container-form-login">
                <form onSubmit={handleSubmitLogin}>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email" 
                        placeholder="Seu email"
                    />

                    <label>Senha</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Sua senha"
                    />
                    <br />
                    
                    <button
                        onClick={() => activateButtonLogin()}
                        type="submit"
                        id="submit-login" >
                        {!login ? 'Entrar' : <Oval width={25} height={25} strokeWidth={10} color="#fff" />}
                    </button>
                </form>
                <div className="forgot-password">
                    <span>Esqueceu sua senha?</span><a href="#">Redefina já!</a>
                </div>
                <div className="alter-authenticate">
                    <p>Ou se preferir entre com</p>
                    <br />
                    <button><FaGoogle />Google</button>
                    <button><FaFacebookSquare />Facebook</button>
                </div>
            </div>
        </ContainerLogin>
    );
}
