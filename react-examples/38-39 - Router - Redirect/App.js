import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Categoria from './pages/Categoria';

function App() {

  return (
    <BrowserRouter>
      <header>
        <h1>Meu site Legal</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/quem-somos">Quem Somos</Link></li>
            <li><Link to="/categoria?tipo=esportes">Esportes</Link></li>
            <li><Link to="/categoria?tipo=noticias">Noticias</Link></li>
            <li><Link to="/categoria?tipo=viagem">Viagem</Link></li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/quem-somos">
          <Redirect to="/sobre"/>
        </Route>
        <Route exact path="/sobre">
          <Sobre/>
        </Route>
        <Route exact path="/categoria">
          <Categoria/>
        </Route>
        <Route path="*">
          <h5>Página não encontrada</h5>
        </Route>
      </Switch>

      <hr/>
      <footer>
        Todos os direitos reservados
      </footer>
    </BrowserRouter>  
  )
}

export default App;
