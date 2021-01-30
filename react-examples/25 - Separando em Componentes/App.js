import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';



function App() {

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <SearchBox frasePadrao="Faça a sua busca..."/>
    </>  
  )
}

export default App;
