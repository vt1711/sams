import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../App';
import { useContext } from 'react';


const Logout = () => {
    const  navigate=useNavigate();
    
  const {state,dispatch} =useContext(UserContext);


    useEffect(() => {
        adminlogout();
      }, []);
      
      const adminlogout =()=>{
        fetch('/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
           }).then( (res)=>{
            if(res.status===200){
      dispatch({type:"USER",payload:false});

                alert("logged out !")
                navigate("/login");
             }
             else{
                alert("logout error");
                const error = new Error(res.error);
                throw error;
             }
           }
                 
           ).catch((err)=>{
            console.log(err);
           })
      }
    
  return (
    <></>
  )
}

export default Logout