 
import Button from "../components/Button"
import {  AiOutlineDelete, AiOutlineArrowLeft, AiFillCheckSquare } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { IoIosAddCircleOutline} from 'react-icons/io';
import  {RiCheckboxBlankFill} from 'react-icons/ri'
import Img  from '../assets/images/exemplo.png'
import Swal from 'sweetalert2'
import { useNavigate, Link } from "react-router-dom";
import * as C from '../Common/CartStyles'
import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
export default function Cart(){
  const { login } = useContext(UserContext);
  
  const navigate=useNavigate();
     const [ summary, setSummary] = useState( [])
     /*    {id: '1', name: 'Air pods max by Apple', price: "150", image:Img},
        {id: "2", name: 'Air pods max by Apple', price: "200", image:Img},
        {id: "3", name: 'Air pods max by Apple', price: "500", image:Img},     
        ])  */
       const data = localStorage.getItem("cart");
       const summaryData = JSON.parse(data);
       
 const teste = summaryData.map((i)=> i.value.replace(',', '.'))
 
  const plus = teste.reduce(getTotal, 0);
  localStorage.setItem("plus", plus);
  function getTotal(total, item) {
  return Number(total) + Number(item) ;
 }
 


     const showUser = {
      user: [
      {
      name: login.name,
      email: login.email}
      ],
      propucts: summaryData }
         
      
    
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
                  const filterId = summaryData.filter((item)=> item._id !== props.id)
                  setSummary(filterId)
                 
                }
                
              })
          
        }
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
        
        
      
        return(
            <>
            
             <C.DivSummary>
                <C.DivCheckboxImg>
                {isOpen ? <AiFillCheckSquare   className="check" onClick={ toggle } /> : <RiCheckboxBlankFill className="Nocheck" onClick={toggle} />}
                 
                    <img className="carImage" src={props.image} />
                </C.DivCheckboxImg>
                <C.DivName>               
                        <p>{props.name} </p>     
                        <p>$ {props.price}</p>                                                                                                    
                </C.DivName>  
                <AiOutlineDelete onClick={ FeleteItem } className="delete" 
                    
                 />
             
              </C.DivSummary> 
             
            </>
            
        )
        
        
    }
   const [ isMenu, setIsMenu] = useState(false)
  
   function showMenu (){

    setIsMenu(!isMenu)
  
   }
   const [newAddress, setNewAddress ] = useState([])
   localStorage.setItem("newAddress", JSON.stringify(newAddress))
   
       
  async function btt ( ){
    const { value: formValues } = await Swal.fire({
        title: 'Multiple inputs',
        html:
          '<input required placeholder="Digite seu endereço" id="swal-input1" class="swal2-input">' 
           ,
        focusConfirm: false,
        preConfirm: () => {
            const address =   
              (document.getElementById('swal-input1').value)
              setNewAddress(address)
          return address
        }
      })
      
      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }
   }
   const [ showCard, setShowCard] = useState([])
   localStorage.setItem("showCard", JSON.stringify(showCard))
   console.log(showCard)
  async function card (){
    const { value: formValues } = await Swal.fire({
      title: 'Multiple inputs',
      html:
        '<input type="number" id="swal-input1" class="swal2-input">' 
        ,
      focusConfirm: false,
      preConfirm: () => {
        const newCard = 
          (document.getElementById('swal-input1').value)
          setShowCard(newCard)
          
          return newCard  
      }
      
    })
    
    
    if (formValues) {
      
      
      
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Cartão cadastrado com sucesso',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
   
  const getAddress = localStorage.getItem("newAddress");
  const addAddress = JSON.parse(getAddress)
  console.log(addAddress)
    return (
        <C.Container>
            <C.DivCart> 
                <C.DivDisplayed>
                    <AiOutlineArrowLeft  onClick={ ()=>{navigate('/') }}/>
                    <p>Seu Carrinho</p>
                    
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
                       
                         <li onClick={()=> {
                          if(!login.token){
                            alert("faça login");
                            return;
                          }
                          navigate('/requests')}
                          }>Pedidos</li>
                       
                        <li onClick={()=> navigate('/checkout')}>Pagamentos</li>
                        <li>Endereços</li>
                        <li>Cupons</li>
                    </ul>
                </C.Mobile>

            </C.DivCart >
            <C.DivAddress>
               <p>Novo Endereço:</p>
               {addAddress}
               <div className="pay"> 
                 <IoIosAddCircleOutline className="add" onClick={btt}/>
                 <button>meus endereços</button>
               </div>
                           
            </C.DivAddress>
            <C.DivAddress>
               <p>Novo Cartão:</p>
               
               <div className="pay">
                  <IoIosAddCircleOutline className="add" onClick={card}/>
                  <button>Paypal</button> 
               </div>
                       
            </C.DivAddress>
            <>
            { summaryData.map((i, index) => <Summary key={index} name={i.nameLower} image={i.image} price={i.value} id={i._id}  />) } 
            </ >
            <C.DivBase>                
                <C.DivBaseTotal>
                    <p>Total</p> <p>$ {plus}</p> 
                </C.DivBaseTotal>
                <Button />
            </C.DivBase>
           
        </C.Container>

         
    )
   
}

 

