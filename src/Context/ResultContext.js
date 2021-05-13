import React from 'react';
import {createContext,useState} from 'react';

const ResultContex = createContext();

const ResultProvider = ({children}) => {
    const [result, setResult] = useState('');

    return(
        <ResultContex.Provider value={{result,setResult}}>
            {children}
        </ResultContex.Provider>
    );
}

export {ResultContex,ResultProvider}