import React from 'react';
import "../../App.css";
import "./outputUser.css";

function OutputUser({username}) {
  return (
    <div className='outputBox'>
      <h1 className='outputTitle'>
        {username}
      </h1>
      <p className='outputText'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, ab? 
      </p>
      <p className='outputText'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, distinctio.
      </p>
      <hr />
    </div>
  )
}

export default OutputUser;

