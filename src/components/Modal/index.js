import React from 'react';
import {useContext} from 'react';

import {ResultContex} from '../../Context/ResultContext';
import {ModalBody,ModalContent,Close,Button} from './style';

export default function Modal({openModal,closeModal}) {
 const {result} = useContext(ResultContex)

  return (
    <ModalBody openModal={openModal}>
      <ModalContent>
        <Close size={24} onClick={closeModal} color="#000"/>
        <h2>Resultado</h2>
        <p>
          {`Olá ${result.name} juntando R$${result.payment},00
          todo mês, você terá R$${result.finalResult},00 em 
          ${result.time / 12} anos`}
        </p>
        <Button onClick={closeModal}>OK</Button>
      </ModalContent>
    </ModalBody>
  );
}
