import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import '../App.css'

export default function ExampleResponse({text}) {
  const [open, setOpen] = useState(false);
  // const exampleResponse = JSON.stringify(text)

  function displayData() {
    const styledData = JSON.stringify(text, null, 2);
    return (<pre>{styledData}</pre>)
  }
  

  return (
    <>
      <button className='button'
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        Example Response
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {displayData()}
        </div>
      </Collapse>
    </>
  );
}

