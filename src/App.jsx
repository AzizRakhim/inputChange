import React, { useState } from 'react';
import './App.css';
import InputUser from './components/inputUser/inputUser';
import OutputUser from './components/outputUser/outputUser';

function App(){
  let [text, setText] = useState("Salom");

  return (
    <>
      <InputUser setText={setText} />
      <OutputUser username={text} />
    </>
  );
}

export default App;
