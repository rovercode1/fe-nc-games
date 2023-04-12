import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "../App.css";

export default function ExampleResponse({ text }) {
  const [open, setOpen] = useState(false);

  function displayData() {
    const styledData = JSON.stringify(text, null, 2);
    return <pre className="exmapleCode">{styledData}</pre>;
  }

  // const isArray = (example) => {
  //   let exampleResponse = "This is an array";
  //   if (!Array.isArray(example)) {
  //     return Object.entries(example).map(([prop, value]) => {
  //       if (!isNaN(value)) {
  //         return (
  //           <div>
  //             "${prop}": <span>{value}</span>,
  //           </div>
  //         );
  //       } else {
  //         return (
  //           <div>
  //             "{prop}": <span>"{value}"</span>,
  //           </div>
  //         );
  //       }
  //     });
  //   } else {
  //   }
  //   return <p>{exampleResponse}</p>;
  // };

  // const displayCode = (response) => {
  //   const responseName = Object.entries(response)[0][0];
  //   return (
  //     <pre>
  //       <div>{"{"}</div>
  //       <div>
  //         "{responseName}": {"{"}
  //       </div>
  //       {Object.entries(response).map(([title, example]) => {
  //         return <>{isArray(example)}</>;
  //       })}
  //       <div>{"}"}</div>
  //       <div>{"}"}</div>
  //     </pre>
  //   );
  // };

  return (
    <>
      <button
        className="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        Example Response
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {displayData()}
          {/* {displayCode(text)} */}
        </div>
      </Collapse>
    </>
  );
}
