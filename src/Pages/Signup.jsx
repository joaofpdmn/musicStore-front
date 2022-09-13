import { Link } from "react-router-dom";
import Button from "../Common/Button";
import Input from "../Common/Input";
import LoginSignUpContainer from "../Common/LoginSignUpContainer";
import Padding from "../Common/Padding";

export default function SignUp() {
    return (
        <LoginSignUpContainer>
            <h1>MusicStore</h1>
            <Padding value={30} />
            <Input placeholder="Nome" />
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <Input placeholder="Repita a senha" />
            <Input placeholder="Número do cartão" />
            <Padding value={10} />
            <Button type="submit" color="#32834c">Inscrever-se</Button>
            <Padding value={20} />
            <Link to='/'>
                <a>Já possuí conta? Vá para a tela de login!</a>
            </Link>

        </LoginSignUpContainer>
    )
}