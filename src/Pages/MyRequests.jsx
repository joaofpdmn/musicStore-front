import React, { useState } from "react"
import Button from "../components/Button"
import {  AiOutlineDelete, AiOutlineArrowLeft, AiFillCheckSquare } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import  {RiCheckboxBlankFill} from 'react-icons/ri'
import Img  from '../assets/images/exemplo.png'
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import * as C from '../Common/CartStyles'
import Styled from 'styled-components';
export default function MyRequests(){
     
    const [ summary, setSummary] = useState( [
        {id: '1', name: 'Air pods max by Apple', price: "150", image:Img},
        {id: "2", name: 'Air pods max by Apple', price: "200", image:Img},
        {id: "3", name: 'Air pods max by Apple', price: "500", image:Img},     
        ])
    
        
    let remove = []
    
        function Summary (props){
            
        function FeleteItem (){
            Swal.fire({
                title: 'Gostaria de cancelar esse pedido?',
                
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, cancelar pedido!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'pedido cancelado com Sucesso.',
                    'success'
                                  
                  )
                  const filterId = summary.filter((item)=> item.id !== props.id)
                  setSummary(filterId)
                }
              })
          
        }
       
        
        
      
        return(
            <>
            
             <C.DivSummary>
                <C.DivCheckboxImg>
                    <img src={props.image} />
                </C.DivCheckboxImg>
                <C.DivName>               
                        <p>{props.name} </p>     
                        <p>$ {props.price}</p>                                                                                                    
                </C.DivName>  
                
             <div onClick={ FeleteItem } className="delete">excluir</div>
              </C.DivSummary> 
             
            </>
            
        )
        
        
    }
   const [ isMenu, setIsMenu] = useState(false)
  
   function showMenu (){

    setIsMenu(!isMenu)
  
   }
   

   
    return (
        <C.Container>
            <C.DivCart> 
                <C.DivDisplayed>
                  <Link to={'/cart'}>
                   <AiOutlineArrowLeft className="back"/>
                  </Link>  
                    <p>Seus Pedidos</p>
                </C.DivDisplayed >
                {/* <GiHamburgerMenu onClick={showMenu} className="car"/>  */}         
                <div className="index" onClick={showMenu}>
                        <div className={isMenu ? "activeTablet" : "tablet"}/>
                 </div>   
                <C.Mobile isMenu={isMenu}>
                    <ul className="subMenu">
                       <Link to={'/'}>
                       <li>Home</li>
                       </Link> 
                        <li>Pedidos</li>
                        <li>Pagamentos</li>
                        <li>Endereços</li>
                        <li>Cupons</li>
                    </ul>
                </C.Mobile>

            </C.DivCart >
            <C.DivAddress>
               <p>Entragar no Endereço:</p>
               <p>Rua x Casa y Cep xxxyy-zz</p>
               <BsChevronDown  />
               
            </C.DivAddress>
            <>
            { summary.map(i => <Summary name={i.name} image={i.image} price={i.price} id={i.id}  />) } 
            </ >
            <C.DivBase>                
                
                 
            </C.DivBase>
           
        </C.Container>

         
    )
}

 

