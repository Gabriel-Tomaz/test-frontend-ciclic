import React from 'react';

import './style.css';

export default function Home(){
    return(
        <div className="main-home">
            <h1 className="app-title">Ciclic</h1>
            <h2 className="app-text">Simule seus investimentos a juros compostos</h2>
            <form className="app-form">
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Mensalidade"/>
                <select>
                    <option>1 Ano</option>
                    <option>2 Anos</option>
                    <option>3 Anos</option>
                    <option>4 Anos</option>
                </select>
                <button type="submit">Simular</button>
            </form>
        </div>
    );
}
