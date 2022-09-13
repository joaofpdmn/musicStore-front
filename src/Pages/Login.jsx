import React from "react";
import Button from "../Common/Button";
import Input from "../Common/Input";
import Padding from "../Common/Padding";
import LoginSignUpContainer from "../Common/LoginSignUpContainer";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <LoginSignUpContainer>
            <h1>MusicStore</h1>
            <Padding value={30} />
            <Input placeholder="E-mail" type="email" />
            <Input placeholder="Password" type="password" />
            <Padding value={10} />
            <Button color="#32834c">Entrar</Button>
            <Padding value={20} />
            <Link to='/signup'>
                <a>Não possuí conta? Inscreva-se</a>
            </Link>
        </LoginSignUpContainer>

    );
}
