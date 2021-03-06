import styled from 'styled-components';
import {MdClose} from 'react-icons/md';

export const ModalBody = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: ${({openModal}) => openModal ? 'flex':'none'};
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    width: auto;
    height: auto;
    min-width: 30%;
    min-height: 200px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 6px;

    h2{
        width: 80%;
        margin-bottom: 10px;
        color: #14213d;
    }

    p{
        width: 80%;
    }

    @media(min-width: 1px) and (max-width: 768px) {
        width: 90%;
    }
`;

export const Button = styled.button`
    width: 150px;
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
    transition: all 0.2s;
    margin-top: 20px;
    border-radius: 6px;

    &:active{
        opacity: 0.9;
    }
`;

export const Close = styled(MdClose)`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`;