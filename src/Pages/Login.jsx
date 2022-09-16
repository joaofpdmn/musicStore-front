import React, { useContext, useState } from "react";
import Button from "../Common/Button";
import Input from "../Common/Input";
import Padding from "../Common/Padding";
import LoginSignUpContainer from "../Common/LoginSignUpContainer";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { loginRequest } from "../Services/UserServices";
import { setUserData } from "../Services/UserData";

export default function Login() {
    const { setLogin } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        const body = {
            email: email,
            password: password,
            token: ''
        };
        const loginPromise = loginRequest(body);
        loginPromise.then(response => {
            setLogin(response.data);
            setUserData(response.data);
            localStorage.setItem('myToken', response.data.token);
            alert('Login realizado com sucesso!');
            navigate(`/home`);
        }).catch(e => {
            alert('Login inválido!');
        });
    }

    return (
        <LoginSignUpContainer>
            <h1>MusicStore</h1>
            <Padding value={30} />
            <form onSubmit={handleSubmit}>
                <Input placeholder="E-mail" type="email" onChange={e => setEmail(e.target.value)}/>
                <Input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)}/>
                <Padding value={10} />
                <Button color="#32834c" type="submit">Entrar</Button>
            </form>
            <Padding value={20} />
            <Link to='/signup'>
                <a>Não possuí conta? Inscreva-se</a>
            </Link>
        </LoginSignUpContainer>

    );
}
