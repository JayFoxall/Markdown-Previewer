import React, { useState } from 'react';
import { InputArea, PreviewArea } from './ComponentsLibrary';
import './App.css';



function App() {

  const startText = `<h1>hello</h1>
                    <h2>world</h2>
                    <a href="#">here's a link</a>
                    <p> a text block</p>
                    <code>some inline code</code>
                    <ul>
                      <li> a list item </li>
                      <li> another </li>
                      <li> another <
                    </ul>
                    <blockquote>some text from another source</blockquote>
                    <img src = "#" alt= "an image">
                    <b>and some bold text!</b>
                    `

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
      <InputArea input={state.input} onChange={handleChange} />
      <PreviewArea input={state.input} defaultText = {state.defaultText}/>
    </>
  );
}

export default App;