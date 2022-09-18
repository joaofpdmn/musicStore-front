import Styled from "styled-components";

export const Mobile = Styled.div(({isMenu}) => (`
width: ${isMenu ? '50vw' : 0};
min-height: 50vh;
background-color:#67C4A7;
position: fixed;
right: 0;
transition: 0.5s;
top: 0;
z-index:1000;
`))


export const Container = Styled.div`
    width: 100%;
    min-height: 100vh;
    background-color:#fff;
    
`
export const DivDisplayed = Styled.div`
    width: 100%;
    display: flex;
    align-items: center
    justify-content: center;
    gap:20px;
   .back{
    color:#000;
   }
   
`

export const DivBaseTotal = Styled.div`
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
export const DivBase = Styled.div`
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
export const DivCart = Styled.div`
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
    padding-right: 28px;
   
    .car{
      color:  #393F42;
       font-size:25px;
        z-index: 10000;
    }
    .mobileleft{
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #000;
        opacity: 0.5;
        right: 0;
        bottom: 0;
        top: 0;
    }

    .hide {
        display: none;
    }
    .index{
       z-index: 10000;
    }
    .subMenu{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 100px;
        gap: 50px;
        color: #fff;
        font-size: 20px; 
    }    
    .tablet {
    width: 30px;
    height: 3px;
    background: #3C184E;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgb(255, 101, 47,.2);
    transition: all 0.5s ease-in-out;
    
    &::before {
      content: '';
      position: absolute;
      width: 30px;
      height: 3px;
      background: #3C184E;
      border-radius: 5px;
      transition: all 0.5s ease-in-out;
      transform: translateY(-10px);
      
    }

    &::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 3px;
      background: #3C184E;
      border-radius: 5px;
      transition: all 0.5s ease-in-out;
      transform: translateY(10px);
      
    }
  }
  .activeTablet {
          
          width: 30px;
          height: 3px;
          border-radius: 5px;
          transform: translateX(-50px);
          background: transparent;
          transition: all 0.5s ease-in-out;
         
  
          &::before {
            content: '';
            position: absolute;
            width: 30px;
            height: 3px;
            
            background: #3C184E;
            border-radius: 5px;
            transition: all 0.5s ease-in-out;
            transform: rotate(45deg) translate(35px, -35px);
           
          }
  
          &::after{
            content: '';
            position: absolute;
            width: 30px;
            height: 3px;
            
            background: #3C184E;
            border-radius: 5px;
            transition: all 0.5s ease-in-out;
            transform: rotate(-45deg) translate(35px, 35px);
          }
      }

`
 
export const DivAddress = Styled(DivCart)`
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
    .add{
      width: 25px;
      height: 25px;
      color: #000;
      
    }
`
export const DivSummary = Styled.div`
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
export const DivCheckboxImg =  Styled.div`
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
     .carImage{
      width: 82px;
      height: 76px;
      border-radius: 4px;
     }
    
`

export const DivName = Styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    gap:20px;
    `
 