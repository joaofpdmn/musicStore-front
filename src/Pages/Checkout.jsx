import { BsCreditCard } from "react-icons/bs";
import { BsPaypal } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import CheckoutContainer from "../components/CheckoutContainer";
import Padding from "../Common/Padding";
import Row from "../Common/Row";
import Column from "../Common/Column";
import Input from "../Common/Input";
import Button from "../Common/Button";
import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
import { checkoutRequest } from "../Services/UserServices";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
    const { login } = useContext(UserContext);
    const [name, setName] = useState('');
    const [cardName, setCardName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        const confirmedCardNumber = login.cardNumber;
        e.preventDefault();
        const body = {
            name,
            cardName,
            expirationDate,
            securityCode,
            confirmedCardNumber
        };
        const checkoutPromise = checkoutRequest(body);
        checkoutPromise.then(response => {
            alert('Compra confirmada! Estaremos retornando à tela inicial!');
            navigate('/list');
        }).catch(e => {
            alert('Não foi possível realizar sua compra! Tente novamente mais tarde.');
            console.log(e.error);
        })
    }

    return (
        <CheckoutContainer>
            <Row justify={"space-between"}>
                <BiArrowBack size={45} style={{ fill: '#29a37c' }} />
                <h1>MusicStore</h1>
                <RiSecurePaymentFill size={45} style={{ fill: '#29a37c' }} />
            </Row>
            <Padding value={50} />
            <h2>MÉTODO DE PAGAMENTO</h2>
            <Row justify={"space-around"}>
                <Column justify={"center"} align={"center"}>
                    <BsCreditCard size={45} style={{ fill: '#29a37c' }} />
                    <h3>Cartão de Crédito</h3>
                </Column>
                <Column justify={"center"} align={"center"}>
                    <BsPaypal size={45} style={{ fill: '#29a37c' }} />
                    <h3>Paypal</h3>
                </Column>
            </Row>
            <Padding value={35} />
            <h2>DETALHES DO PAGAMENTO:</h2>
            <form onSubmit={handleSubmit}>
                <Input placeholder="Nome Completo" type="text" onChange={e => setName(e.target.value)} />
                <Input placeholder="Número do Cartão" disabled={true} value={login.cardNumber} />
                <Input placeholder="Nome no Cartão" type="text" onChange={e => setCardName(e.target.value)} />
                <Row justify={"center"}>
                    <Input placeholder="Data de Expiração" width={"65%"} margin={"4%"} type="text" onChange={e => setExpirationDate(e.target.value)} />
                    <Input placeholder="CVV" width={"20%"} type="text" onChange={e => setSecurityCode(e.target.value)} />
                </Row>
                <Button color="#29a37c" type="submit">Confirmar Compra</Button>
            </form>
        </CheckoutContainer>
    )
}
