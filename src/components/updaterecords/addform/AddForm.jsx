import React from 'react'
import './addform.css'
import FormInput from './FormInput'
import FormLabel from './FormLabel'
const AddForm = () => {
  return (
    <>
    <div className='addformdiv'>
    <form action="">
    <FormLabel inputfor="Name"/>
    <FormInput class="inputfield" inputforid="Name"/> <br /><br />
    <FormLabel inputfor="Address"/>
    <FormInput class="inputfield addressip" inputforid="Address"/> <br /><br />
    <FormLabel  inputfor="Status"/>
    <FormInput  class="inputfield statusip" inputforid="Status"/> <br /><br />
    <input className='addbtn' type="submit" value="Add" />
    </form>
    </div>
   
    </>
  )
}

export default AddForm