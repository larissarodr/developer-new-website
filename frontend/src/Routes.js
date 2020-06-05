import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Solucoes from './pages/Solucoes';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';

export default function Routes(){
    return (
        <BrowserRouter basename={window.location.pathname || ''}>
          <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/solucoes' component={Solucoes}/>
            <Route path='/contato' component={Contato}/>
            <Route path='/empresa' component={Empresa}/>
          </Switch>
        </BrowserRouter>
    );
}