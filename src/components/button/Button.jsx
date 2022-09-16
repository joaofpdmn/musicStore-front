import React from "react"
import Styled from 'styled-components';
import Swal from 'sweetalert2'
 

export default function Button(){
   
    function final (){
        Swal.fire({
            title: 'Confirmar Compra?',
            text: "Você poderá Comprar Novamente",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Item excluído com Sucesso.',
                'success' )
                Swal.fire({
                    title: 'compra realizada com sucesso resumo: produto, valor, data da compra ',
                    width: 600,
                    padding: '3em',
                    color: '#716add',
                    background: '#fff url(/images/trees.png)',
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                  })
            }
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

 

