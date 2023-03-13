import React from 'react';
import { marked } from "marked"

marked.setOptions({
  gfm: true,
  breaks: true,
})

export function InputArea(props) {
  return (
    <textarea
      id = "editor"
      value={props.input}
      onChange={props.onChange}
      placeholder="<h1>Enter some markdown here</h1>"
    />
  );
}

export function PreviewArea(props) {
    const htmlInput = marked.parse(props.input)
    const placeholderText = marked.parse(props.defaultText)
  
  if(props.input !== ""){
    return (
      <div id="preview" dangerouslySetInnerHTML={{__html: htmlInput}}/>
    )} else {
    return (
      <div id="preview" dangerouslySetInnerHTML={{__html: placeholderText}}/>
    )}

};
