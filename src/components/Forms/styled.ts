import { styled } from "styled-components";

export const Forms = styled.form`
    width: 40rem;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 10px;  
    
    @media screen and (max-width: 768px) {
        
        display: flex; 
        justify-content: center;
        width: 30rem;
    }

    input {
        height: 2.5rem;
        width: 100%;

        font-size: 16px;    
        font-weight: 500;
        padding: 5px;
        
        border: none;

        border: 1px solid #737380;

        border-radius: 5px;

        margin-top: 20px;

        background-color: #fefefe;
    }

    input:hover {
        background-color: #fff0ff;
    }

    input:focus {
        outline: 1px solid #008FFB;

        background-color: #fff0ff;
        color: #202020;
    }

    .btnAdd {
        background-color: #008FFB;
        color: #fff0ff;

        font-weight: 600;

        padding: 5px;

        height: 2.5rem;
        width: 15rem;

        border: none;

        border-radius: 5px;

        margin-top: 1.5rem;

        cursor: pointer;
    }

    .btnAdd:hover {
        background-color: #2A6FC0;
    }

    select {
        width: 100%;
        height: 2.5rem;

        padding: 5px;

        margin-top: 1.5rem;

        border: 1px solid #737380;
        border-radius: 5px;

        font-size: 16px;

        cursor: pointer;
    }

    select:hover {
        background-color: #fff0ff;
    }

    select:focus {
        outline: 1px solid #008FFB;
    }
`