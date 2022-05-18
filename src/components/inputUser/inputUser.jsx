import React from 'react'

function InputUser({setText}) {
  const inputChangeHandler = (event) => {
    setText(event.target.value)
  }
  
  return (
    <div>
      <input type="text" className='inputText' name='text' onChange={inputChangeHandler} />
    </div>
  )
}

export default InputUser;
