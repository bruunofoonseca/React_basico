import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width:400px;
  height:30px;
  font-size:16px;
  padding:10px;
  border:1px solid #000; 
`;

function App() {

  const [ email, setEmail ] = useState('');

  return (
    <>
      <Input placeholder="Digite um email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

      {email.length > 0 && 
        <div>
          <p>{email.length} caractere{email.length != 1 ? 's' : ''}</p>
          <p>Alguma coisa</p>
        </div>
      }
    </>  
  )
}

export default App;
