import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    // console.log("On Change Function called");
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    // console.log("Upper Case Function called");
    setText(text.toUpperCase());
    props.showAlert("Converted to upper case", "success");
  };

  const handleLowerCase = () => {
    // console.log("Lower Case Function called");
    setText(text.toLowerCase());
    props.showAlert("Converted to lower case", "success");
  };

  const handleClearText = () => {
    // console.log("Clear Text");
    setText("");
    props.showAlert("Cleared text", "success");
  };

  const handleCopyText = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra space", "success");
  };

  return (
    <>
      <div
        className="mb-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.heading}</h3>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "#0d2e67" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        <div className="container mt-3">
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpperCase}>
            Convert to Uppercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}>
            Convert to Lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
            Clear Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>
            Copy Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
            Rempve Extra Space
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Entered text summary</h3>
        <p>
          Total words are <b>{text.split(/\s+/).filter((element) => {return element.length !==0}).length}</b> and Total characters
          are <b>{text.length}</b>
        </p>
        <p>
          Total time read is <b>{0.008 * text.split(" ").filter((element) => {return element.length !==0}).length}</b>
        </p>
      </div>
    </>
  );
}
