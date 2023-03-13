import React from 'react';
import { marked } from "marked"

// A component for input text area
export function InputArea(props) {
  return (
    <textarea
      value={props.input}
      onChange={props.onChange}
      placeholder="<h1>Enter some markdown here</h1>"
    />
  );
}

// A component for markdown preview
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
   /* return(
        <div className="preview" dangerouslySetInnerHTML={{__html: htmlInput}}/>
    )*/
};
