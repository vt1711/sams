import React from 'react'
import './forminput.css'
const FormInput = (props) => {

    
    return (
    <>
    
        <input 
         onChange={(e)=>props.onchange(e.target.value)}
         className={props.class} type={props.inputtype} id={props.inputforid} / >
        

    </>
  )
}

export default FormInput