import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/home';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path='/' exact component={Home}/>
        </BrowserRouter>
        
    );
}