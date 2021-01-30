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

function App() {

  return (
    <Site>
      <Title>Titulo Legal</Title>
    </Site>
  )
}

export default App;
