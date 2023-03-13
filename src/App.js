import React, { useState } from 'react';
import { InputArea, PreviewArea } from './ComponentsLibrary';
import './App.css';



function App() {
  const [state, setState] = useState({
    input: "",
    defaultText: ""
  });

  const handleChange = (event) => {
    setState({input: event.target.value,
              defaultText: event.target.placeholder});
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="container">
        <InputArea input={state.input} onChange={handleChange} />
        <PreviewArea input={state.input} defaultText = {state.defaultText}/>
      </div>
    </div>
  );
}

export default App;