import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';

function App() {

  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState([]);

  useEffect(()=>{

    setList([
      {title: 'comprar bolodo', done:false},
      {title: 'comprar arroz', done:true},
      {title: 'comprar manteiga', done:false},
    ]);

  }, []);

  function addAction(newItem) {
    let newList = [...list, {title: newItem, done: false}];
    setList(newList);
  }

  function handleToggleDone(index) {
    let newList = [...list];
    newList[index].done = !newList[index].done

    setList(newList);
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <SearchBox frasePadrao="Adicionando um item..." 
        onEnter={addAction}
      />
      <hr />
      Texto procurado: {searchText}

      <br/>

      <ul>
        {list.map((item, index)=>{
          return (
            <li key={index} onClick={()=>{handleToggleDone(index)}}>
              {item.done &&
                <del>{item.title}</del>
              }
              {!item.done &&
                item.title
              }
            </li>
          )
        })}
      </ul>
    </>  
  )
}

export default App;
