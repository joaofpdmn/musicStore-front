import React from "react"
import Styled from 'styled-components';
import Swal from 'sweetalert2'
import axios from 'axios';
import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
export default function Button(){
  const { login } = useContext(UserContext);
 const token = login.token
  const data = localStorage.getItem("cart");
  const summaryData = JSON.parse(data);
  
 
const showUser = {
 user: [
 {
 name: login.name,
 email: login.email}
 ],
 products: summaryData }
 


  const order = 
  {
    price: "50,50",
    Product : "fone"
  }
     
      const config = {
        headers: {
        authorization: `Bearer${token}`,
        },
      };
    function final (){
      if(!token){
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    
          axios.post('http://localhost:5000/cart', showUser)
          .then((res) =>{
           
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 3000
              
            })
          })
          .catch((err) =>{
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 3000
            })
          })
    }
    return (
        <NewButton onClick={final}>Conrfirme o Pagamento</NewButton>
    )
}

const NewButton = Styled.button`
    min-width: 349px;
    min-height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 15px;
    background: #67C4A7;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    border-radius: 4px;
    cursor: pointer;
`
  export const Buttondelet = Styled(NewButton)`
  background: red;
  min-width: 175px;
  min-height: 25px;
`

 

