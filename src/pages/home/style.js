import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    width: 35%;
    height: auto;
    min-height: 40vh;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const FormHeader = styled.div`
    width: 90%;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 20px;

    h2{
        margin-bottom: 10px;
        color: #14213d;
    }

    p{
        font-size: 1.1em;
        color: #000;
    }

`;

export const FieldArea = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    label{
        color: #000;
        font-size: 1em;
        margin-bottom: 10px;
    }

    input{
        height: 40px;
        padding: 0 12px;
        font-size: 1em;
        border: solid 2px #e5e5e5;
        outline: none;
        border-radius: 6px;
        transition: all 0.4s;

        &:focus{
            border: solid 2px #14213d;
        }

    }

    select{
        height: 45px;
        font-size: 1em;
        padding: 0 12px;
        font-size: 1em;
        border: solid 2px #e5e5e5; 
        background-color: #FFF;
        outline: none;
        border-radius: 6px;
        transition: all 0.4s;

        &:focus{
            border: solid 2px #14213d;
        }
    }
`;

export const Button = styled.button`
    width: 200px;
    height: 40px;
    align-self: flex-end;
    margin-right: 21px;
    font-size: 1em;
    font-weight: 600;
    outline: none;
    border: none;
    background-color: #14213d;
    color: #FFF;
    cursor: pointer;
    transition: all 0.4s;
    border-radius: 6px;

    &:active{
        opacity: 0.9;
    }
`;

export const Error = styled.p`
    font-size: 14px;
    color: #EF5350;
    margin-top: 5px;
    transition: all 0.4s;
`;