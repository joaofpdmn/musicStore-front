import React, { useState } from "react"
import Styled from 'styled-components';
import Button from "../components/button/Button"
import { AiOutlineShoppingCart, AiOutlineDelete, AiOutlineArrowLeft, AiFillCheckSquare } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import  {RiCheckboxBlankFill} from 'react-icons/ri'
import Img  from '../assets/images/exemplo.png'
import Swal from 'sweetalert2'



export default function Cart(){
     
    const [ summary, setSummary] = useState( [
        {id: '1', name: 'Air pods max by Apple', price: "150", image:Img},
        {id: "2", name: 'Air pods max by Apple', price: "200", image:Img},
        {id: "3", name: 'Air pods max by Apple', price: "500", image:Img},     
        ])
    
        console.log(summary)
    let remove = []
    
        function Summary (props){
            
        function FeleteItem (){
            Swal.fire({
                title: 'Gostaria de excluir esse item?',
                text: "Você poderá adicioná-lo novamente",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, deletar item!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Item excluído com Sucesso.',
                    'success'
                                  
                  )
                  const filterId = summary.filter((item)=> item.id !== props.id)
                  setSummary(filterId)
                }
              })
          
        }
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
        
        
      
        return(
            <>
             
             <DivSummary>
                <DivCheckboxImg>
                {isOpen ? <AiFillCheckSquare   className="check" onClick={ toggle } /> : <RiCheckboxBlankFill className="Nocheck" onClick={toggle} />}
                
                    <img src={props.image} />
                </DivCheckboxImg>
                <DivName>               
                        <p>{props.name} </p>     
                        <p>$ {props.price}</p>                                                                                                    
                </DivName>  
                <AiOutlineDelete onClick={ FeleteItem } className="delete" 
                    
                 />
             
              </DivSummary> 
             
            </>
            
        )
        
        
    }
   
   
    return (
        <Container>
            <DivCart> 
                <DivDisplayed>
                    <AiOutlineArrowLeft/>
                    <p>Seu Carrinho</p>
                </DivDisplayed >
                <AiOutlineShoppingCart className="car"/>
            </DivCart >
            <DivAddress>
               <p>Endereço de Entrega:</p>
               <p>Rua x Casa y Cep xxxyy-zz</p>
               <BsChevronDown  />
            </DivAddress>
            <>
            { summary.map(i => <Summary name={i.name} image={i.image} price={i.price} id={i.id}  />) } 
            </ >
            <DivBase>                
                <DivBaseTotal>
                    <p>Total</p> <p>$ 00.00</p>
                </DivBaseTotal>
                <Button />
            </DivBase>
           
        </Container>

         
    )
}

const Container = Styled.div`
    width: 100%;
    min-height: 100vh;
    background-color:#fff;
    
`
const DivDisplayed = Styled.div`
    width: 100%;
    display: flex;
    align-items: center
    justify-content: center;
    gap:20px;
   
   
`

const DivBaseTotal = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:266px;
    margin-top: 14px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #393F42;

`
const DivBase = Styled.div`
    width: 100%;
    position: fixed;
    bottom: 0px;
    //gap:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top:2px solid #F0F2F1;
    margin-bottom: 30px;
    
` 
const DivCart = Styled.div`
    //width: 375px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    //gap: 120px; 
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #393F42;
    padding:10px;
    padding-left: 20px;
    padding-right: 35px;
    .car{
      color:  #393F42;
       font-size:25px;
    }
`
const DivAddress = Styled(DivCart)`
    //gap:30px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #393F42;
    border-top:2px solid #F0F2F1;
    border-bottom:2px solid #F0F2F1;
    justify-content: space-between;
    
`
const DivSummary = Styled.div`
   display:flex;
   align-items: center;
   justify-content: space-between;
   weight:100%;
   padding:20px;
   padding-left: 20px;
   padding-right: 20px;
   .delete{
        cursor: pointer; 
        width: 24px;
        height: 24px;
        background: #FFFFFF;
        border: 10px solid #F0F2F1;
        border-radius: 50px;
    }
  
`
const DivCheckboxImg =  Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;
    margin-right: 10px;
    .check{
        color: #67C4A7;
        cursor: pointer; 
        font-size: 30px;
        border-radius: 19px;
     }
     .Nocheck{
        cursor: pointer; 
        font-size: 30px;
        border:none;
        color: #E5E5E5;
     }
    
`

const DivName = Styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    gap:20px;
    `
