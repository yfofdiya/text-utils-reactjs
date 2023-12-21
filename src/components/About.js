import React from "react";
// import { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //     color: 'black',
  //     backgroundColor: 'white',
  //     border: '1px solid black'
  // });

//   const [btnText, setBtnText] = useState("Enable Dark Mode");

  // const enableMode = () => {
  //     if(myStyle.color === 'black') {
  //         setMyStyle({
  //             color: 'white',
  //             backgroundColor: 'black',
  //             border: '1px solid white'
  //         });
  //         setBtnText('Enable Light Mode');
  //     } else {
  //         setMyStyle({
  //             color: 'black',
  //             backgroundColor: 'white',
  //             border: '1px solid black'
  //         });
  //         setBtnText('Enable Dark Mode');
  //     }
  // };

  let myStyle = {
    backgroundColor: props.mode === "dark" ? "#0d2e67" : "white",
    color: props.mode === "dark" ? "white" : "black",
    border: props.mode === "dark" ? "1px solid white" : "1px solid black"
  }

  return (
    <div
      className="container my-3"
      style={myStyle}
    >
      <h1>About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
            style={myStyle}
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the first item's accordion body.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
            style={myStyle}
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the second item's accordion body. Let's imagine this being filled
              with some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
            style={myStyle}
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the third item's accordion body. Nothing more exciting happening
              here in terms of content.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button className="btn btn-primary mb-1" onClick={enableMode}>{btnText}</button>
      </div> */}
    </div>
  );
}
