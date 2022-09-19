import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getProducts } from "../Services/UserServices";

export default function RouteList(){
    const navigate=useNavigate();
    const [search,setSearch]=useState("");
    const [product,setProduct]=useState([]);
    const [cart,setCart]=useState([]);
    const [itens,setItens]=useState(cart.length);
    
    useEffect(()=>{getProducts().then((res)=>{
        setProduct(res.data);
        console.log(product);
    }).catch((res)=>{console.log(res)});},[]);
    console.log(cart);

    function remove(e){
        let i=cart.indexOf(e);
        if(cart.includes(e)){
            while(i>=0){
                setCart(cart,cart.splice(i,1),
                i=cart.indexOf(e));
        }}
            setItens(cart.length);
    };
    function add(e){
            setCart([...cart,e]);
            setItens((cart.length+1));  
    };
    function handleForm(e){
        e.preventDefault();
        setSearch(e.target.value);
    };
    function searchItem(){
        navigate(`/list/${search}`);
    }

    return (<DivRouteList>
        <Top>
        <ion-icon name="arrow-back-outline"></ion-icon>
            <DivSearch>
                <ion-icon name="search-outline" onClick={()=>{searchItem()}}></ion-icon>
                <InputSearch placeholder="Search" onChange={handleForm}></InputSearch>
            </DivSearch>
            <LittleBall><h1>{itens}</h1></LittleBall>
        <ion-icon name="cart-outline"></ion-icon>
        </Top>

        <Container>
            {product.map((e,i)=>(<Box key={i}>
                <img src={e.image}/>
                <LittleBox>
                     <h1>{e.name}</h1>
                    <h2>${e.price}</h2>
                    <Buttons>
                        <ButtonAdd onClick={()=>{add(e)}}><h3>Add to cart</h3></ButtonAdd>
                        <ButtonRemove onClick={()=>{remove(e)}} ><h4>Remove</h4></ButtonRemove>
                    </Buttons>
                </LittleBox>
            </Box>))}
        </Container>
    </DivRouteList>);
}

const DivRouteList=styled.div`
    margin: auto;
    width: 390px;
    height: 100vh;  
    background-color: #fff;
    overflow-y: scroll;
`
const InputSearch=styled.input`
    height: 38px;
    background-color: #ffffff;
    border: transparent;
    margin-left: 10px;
    outline: none;
`
const Top=styled.div`
    width: 390px;
    height: 80px;
    background-color: #fff;
    padding: 0 15px;
    position: fixed;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f0f2f1;
    ion-icon{
        font-size:150%;
        cursor: pointer;
    }
`
const DivSearch=styled.div`
    width: 70%;
    height: 40px;
    border-radius: 5px;
    border: 1.5px solid #f0f2f1;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding: 10px;
    ion-icon{
        color: #939393;
    }
`
const Container=styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 70px;
    padding: 15px 5px; //mobile  15px
`
const Box=styled.div`
    width: 170px;
    height: 217px;
    background-color: aliceblue;
    border-radius: 6px;
    margin: 5px;
    img{
        width: 170px;
        height: 112px;
        border-radius: 6px 6px 0px 0px; 
    }
    h1{
        font-family: 'Inter';
        font-weight: 400;
        font-size: 12px;    
        line-height: 15px;
        color: #393F42;
    }
    h2{
        font-family: 'Inter';
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
    }
`
const ButtonAdd=styled.div`
    width: 80px;
    height: 31px;
    background: #67C4A7;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    h3{
    font-family: 'Inter';
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #fff;
    }
`
const LittleBox=styled.div`
    width: 170px;
    height: 105px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 13px;
`

const LittleBall=styled.div`
    width: 12px;
    height: 12px;
    background-color: #d65b5b; //ternario na cor;
    border-radius: 100%;
    position: absolute;
    right: 13px;
    top:28px;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        margin-top:2px;
        font-size: 10px;
        color: #ffffff;
    }
`
const ButtonRemove=styled.div`
    width: 60px;
    height: 31px;
    background: #d65b5b;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    h4{
    font-family: 'Inter';
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #fff;
    }
`
const Buttons=styled.div`
    display: flex;
    justify-content: space-between;

`