import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Site = styled.div`
  width:400px;
  height:400px;
  background-color:#00FF00;
`
const Title = styled.h1`
  color:#FF0000;
  font-size:18px;
`
const Botao = styled.button`
  font-size:19px;
  padding:10px 15px;
  background-color: ${props => props.color || '#00FF00'}
`

function App() {

  return (
    <Site>
      <Botao color="#FF0000">Clique Aqui</Botao>
      <Botao color="#0000FF">Clique Aqui</Botao>
      <Botao>Clique Aqui</Botao>
    </Site>
  )
}

export default App;
