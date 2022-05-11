import React from 'react'

function InputUser({onchange}) {
  return (
    <div>
      <input type="text" className='inputText' name='text' onChange={onchange} />
    </div>
  )
}

export default InputUser;
