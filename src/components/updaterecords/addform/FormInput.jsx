import React from 'react'
import './forminput.css'
const FormInput = (props) => {
  const {inputfor} =props ;
    return (
    <>
        <label className='inputlabel' htmlFor="inputfor">{inputfor} : </label>
        <input className='inputfield' type="text" id='inputfor' / >
        <br />

    </>
  )
}

export default FormInput