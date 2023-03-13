import React from 'react';
import { marked } from "marked"

// input text component
export function InputArea(props) {
  return (
    <textarea
      value={props.input}
      onChange={props.onChange}
      placeholder="<h1>Enter some markdown here</h1>"
    />
  );
}

// markdown preview component
export function PreviewArea(props) {
    const htmlInput = marked.parse(props.input)
    const placeholderText = marked.parse(props.defaultText)
  
  if(props.input !== ""){
    return (
      <div className="preview" dangerouslySetInnerHTML={{__html: htmlInput}}/>
    )} else {
    return (
      <div className="preview" dangerouslySetInnerHTML={{__html: placeholderText}}/>
    )}

};
