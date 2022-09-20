import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Logout = () => {
    const  navigate=useNavigate();

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
                alert("logged out !")
                navigate("/");
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