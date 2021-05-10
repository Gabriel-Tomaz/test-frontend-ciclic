import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F5F5F5;
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
    margin-bottom: 15px;

    h2{
        margin-bottom: 10px;
    }

`;

export const FieldArea = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    label{
        color: #000;
        margin-bottom: 8px;
    }

    input{
        height: 40px;
        padding: 0 12px;
    }

    select{
        height: 40px;
    }
`;