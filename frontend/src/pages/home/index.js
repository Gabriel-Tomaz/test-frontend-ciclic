import React,{useState} from 'react';

import './style.css';
import api from '../../services/api';
import ResultDialog from '../../components/resultDialog';

export default function Home(){
    const [name,setName] = useState('');
    const [potion,setPotion] = useState();  
    const [yars,setYars] = useState();
    const [result,setResult] = useState();

    const [openDialog,setOpenDialog] = useState(false);
    const [cont, setCont] = useState(0);

   async function simulate(e){
        e.preventDefault();

        await api.post('/',{
            "expr": `${potion} * (((1 + 0.00517) ^ ${yars} - 1) / 0.00517)`,
            "precision": 5
            }).then(response => {
                setResult(response.data.result);
            }).catch(err => {
                console.log("erro ao cadastrar" + err);  
            })
            setOpenDialog(true);
            setCont(cont + 1);
        }

    return(
        <div className="main-home">
            <h1 className="app-title">Ciclic</h1>
            <h2 className="app-text">Simule seus investimentos a juros compostos</h2>
            
            <form className="app-form" onSubmit={simulate}>
                <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" placeholder="Mensalidade" value={potion} onChange={e => setPotion(e.target.value)} />
                <select value={yars} onChange={e => setYars(e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="12">1 Ano</option>
                    <option value="24">2 Anos</option>
                    <option value="36">3 Anos</option>
                    <option value="48">4 Anos</option>
                </select>
                <button className="app-button" type="submit">Simular</button>
            </form>

            <ResultDialog 
                openDialog={openDialog} 
                cont={cont}
                name={name}
                potion={potion}
                yars={yars}
                result={result}
            />
        </div>
    );
}
