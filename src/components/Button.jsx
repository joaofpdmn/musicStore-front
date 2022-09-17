import React from "react"
import Styled from 'styled-components';
import Swal from 'sweetalert2'
 import axios from 'axios';

export default function Button(){
 const tess1 = [{ ola:"pola"}]
 const tesss = 
{ pr: [
             {
               price: "1000,50",
               product: "car"
             },
              {
               price: "1000,50",
               product: "car"
              }
]}

//console.log({...tesss, ...tess1})

  const order = 
  {
    price: "50,50",
    Product : "fone"
  }
     let token = '49fd596f-51b7-454f-b219-e2c010d09720'
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
    
          axios.post('http://localhost:5000/cart', config, order)
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

 

