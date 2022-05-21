import React from 'react'
import FormInput from '../updaterecords/addform/FormInput'
import FormLabel from '../updaterecords/addform/FormLabel'
import './login.css'

const Login = () => {
  return (
   <>
    <h1> Welcome to Society Account Management System </h1>
    <h4 className="h4login" >Kindly Login to proceed</h4>
    <div className="loginformdiv">
    <form action="">
        <FormLabel inputfor="UserId" class="loginlabel" />
        <FormInput class="logininput logininputuserid" inputforid="UserId" inputtype="text"/> <br /><br />
        <FormLabel inputfor="Password" class="loginlabel loginlabelpassword "/>
        <FormInput class="logininput" inputforid="Password" inputtype="password"/>
        <button className='loginbutton'>Log In</button>
    </form>

    </div>
    
   </>
  )
}

export default Login