import React from 'react'
import './addform.css'
import FormInput from './FormInput'
const AddForm = () => {
  return (
    <>
    <div className='addformdiv'>
    <form action="">
    <FormInput inputfor="Name"/> <br />
    <FormInput inputfor="Address"/> <br />
    <FormInput inputfor="Status"/> <br /><br />
    <input className='addbtn' type="submit" value="Add" />
    </form>
    </div>
   
    </>
  )
}

export default AddForm