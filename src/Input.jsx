import React from 'react'

function Input({inputvalue}) {
  return (
  <>
    <input type="text" readOnly  placeholder='0'  value={inputvalue} />
  </>
  )
}

export default Input
