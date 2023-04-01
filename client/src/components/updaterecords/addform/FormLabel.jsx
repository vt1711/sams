import React from 'react'

const FormLabel = (props) => {
  return (
    <>
        <label className={`inputlabel ${props.class}`} htmlFor={props.inputfor}>{props.inputfor} : </label>
    </>
  )
}

export default FormLabel