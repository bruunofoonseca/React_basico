import React, { useEffect, useState } from 'react';

function App() {

  const [contagem, setContagem] = useState( 0 );

  const botaoAction = () => {
    setContagem(contagem + 1)
  };

  return (
    <>
      <div>{contagem} Vezes</div>
      <button onClick={botaoAction}>Clique Aqui</button>
    </>
  )
}

export default App;
