import React, { useState } from 'react';
import { InputArea, PreviewArea } from './ComponentsLibrary';
import './App.css';



function App() {

  const startText = "\n # heading1 \n ## heading2 \n [links](#) \n `inline code` \n ``` \n code block\n ```\n- a list item \n >a blockquote\n![image](image.jpg)\n---\n**bold text**"

  const [state, setState] = useState({
    input: "",
    defaultText: startText,
  });

  const handleChange = (event) => {
    setState({
      input: event.target.value,
      defaultText: event.target.placeholder});
  };

  return (
    <>
      <InputArea input={state.input} onChange={handleChange} defaultText= {state.defaultText} />
      <PreviewArea input={state.input} defaultText = {state.defaultText}/>
    </>
  );
}

export default App;