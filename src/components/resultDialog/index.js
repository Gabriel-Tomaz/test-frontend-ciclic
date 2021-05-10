import React from 'react';
import {useState,useEffect} from 'react'
import Dialog from '@material-ui/core/Dialog';


export default function AlertDialog(props) {
    const [open, setOpen] = useState(false);

    function openDialog(){
      setOpen(props.openDialog);
    }

    function closeDialog(){
        setOpen(false);
    }

    useEffect(() => {
      openDialog();
    },[props.cont]);

    function currencyFormater(number){
      return Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(number);
    }

  return (
    <div>
      <Dialog open={open}>
        <div className="dialog-content">
          <h1 className="dialog-content-title">Ciclic</h1>
          <p className="dialog-content-text">
            Olá {props.name + " "}, juntando
            {" " + currencyFormater(props.potion) + " "}
            todo mês, você terá 
            {" "+ currencyFormater(props.result) + " "}
            em {" "+props.yars / 12 + " "} anos
          </p>
          <button className="dialog-content-button" onClick={closeDialog}>FECHAR</button>
        </div>
      </Dialog>
    </div>
  );
}
