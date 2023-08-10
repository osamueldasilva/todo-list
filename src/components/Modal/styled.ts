import { styled } from "styled-components";

export const OpenModalBtn = styled.div`


    .openModalBtn {
        background-color: #008FFB;

        height: 2rem;
        width: 2rem;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 8px;
        border: none;

        color: white;

        font-weight: 700;

        cursor: pointer;
    }  

    .openModalBtn:hover {
        background-color: #2A6FC0;
    }

    .openModalBtn:focus {
        outline: none;

        background-color: #3EA7FF;
    }
`

export const Modal = styled.div`
    position: absolute;

    display: flex;
    flex-direction: column;
    
    width: 9rem;
    
    border-radius: 8px;

    @media screen and (max-width: 768px) {
   left: 20rem;
  }

    button {
        cursor: pointer;

        margin: 0;
        padding: 5px;

        border: none;
       
       
        filter: drop-shadow(0px 4px 8px rgba(57, 57, 57, 0.32));

        font-size: 16px;
        font-weight: 600;

        /* display: flex;
        justify-content: center;
        align-items: center; */
    }

    button:hover {
        background-color: #008FFB;
        color: #f8f8f8
    }

    button:focus {
        outline: none;
        background-color: #008FFB;
        color: #f8f8f8
    }

    .edit {
        border-radius: 8px 8px 0 0;
    }
    .delete {
        margin-top: 2px;
        border-radius: 0 0 8px 8px;
    }
   
`
export const ModalEdit = styled.div`
height: 30rem;
width: 35rem;

background-color: #FEFEFE;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

border-radius: 8px;

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media screen and (max-width: 768px) {
  
    width: 28rem;

    input, select {
        max-width: 26rem;
    }

}

.headerModal {
    width: 100%;
    display: flex-start;
    padding: 10px;

    h1 {
        font-weight: 700;
    }
}

input {
    height: 2.5rem;
    width: 30rem;

    font-size: 16px;    
    font-weight: 500;
    padding: 5px;
    
    border: none;

    border: 1px solid #737380;

    border-radius: 5px;

    margin-top: 30px
    }

input:hover {
    background-color: #fff0ff;
}

input:focus {
    outline: 1px solid #008ffb;;

    background-color: #fff0ff;
}


select {
        width: 30rem;
        height: 2.5rem;

        padding: 5px;

        margin-top: 30px;

        border: 1px solid #737380;
        border-radius: 5px;

        font-size: 16px;

        cursor: pointer;
    }

    select:hover {
        background-color: #fff0ff;
    }

    select:focus {
        outline: 1px solid #008ffb;
    }

    button {
        width: 10rem;
        height: 2.5rem;

        margin: 30px 10px;
        

        border: none;
        border-radius: 8px;

        cursor: pointer; 
        
        color: #fff0ff;
        font-weight: 600;
    }

    .Edit {
        background-color: #008ffb;
    }

    .Edit:hover {
        background-color: #2A6FC0;
    }

    .Edit:focus {
        outline: none;
        background-color: #3EA7FF;
    }

    .cancelar {
        background-color: #515151;
    }

    .cancelar:hover {
        background-color: #6c6c6c;
    }

    .cancelar:focus {
        background-color: #6c6c6c;
        outline: none;
    }
` 