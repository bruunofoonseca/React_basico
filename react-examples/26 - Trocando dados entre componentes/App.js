import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';

function App() {

  const [searchText, setSearchText] = useState('');

  function handleSearchInput(novoTexto) {
    setSearchText( novoTexto );
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <SearchBox frasePadrao="Faça a sua busca..."
        onChangeText={handleSearchInput}
      />
      <hr />
      Texto procurado: {searchText}
    </>  
  )
}

export default App;
