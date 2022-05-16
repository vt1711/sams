import React from 'react'

const FormLabel = (props) => {
  return (
    <>
        <label className='inputlabel' htmlFor={props.inputfor}>{props.inputfor} : </label>
    </>
  )
}

export default FormLabel