import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Common/Button";
import Input from "../Common/Input";
import LoginSignUpContainer from "../Common/LoginSignUpContainer";
import Padding from "../Common/Padding";
import { signUpRequest } from "../Services/UserServices";

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        const body = {
            name: name,
            email: email,
            password: password,
            repeatPassword: repeatPassword,
            cardNumber: cardNumber
        };
        const signUpPromise = signUpRequest(body);
        signUpPromise.then(() => {
            alert('Seu cadastro foi concluído. Estaremos retornando à tela de login!');
            navigate('/');
        }).catch(() => {
            alert('Erro, não conseguimos fazer seu cadastro. Tente novamente!');
        });
    }

    return (
        <LoginSignUpContainer>
            <h1>MusicStore</h1>
            <Padding value={30} />
            <form onSubmit={handleSubmit}>
                <Input placeholder="Nome" type="text" onChange={e => setName(e.target.value)} />
                <Input placeholder="Email" type="email" onChange={e => setEmail(e.target.value)} />
                <Input placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)} />
                <Input placeholder="Repita a senha" type="password" onChange={e => setRepeatPassword(e.target.value)} />
                <Input placeholder="Número do cartão" type="text" onChange={e => setCardNumber(e.target.value)} />
                <Padding value={10} />
                <Button type="submit" color="#32834c">Inscrever-se</Button>
            </form>
            <Padding value={20} />
            <Link to='/'>
                <a>Já possuí conta? Vá para a tela de login!</a>
            </Link>

        </LoginSignUpContainer>
    )
}