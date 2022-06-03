import React ,{useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './addform.css'
import FormInput from './FormInput'
import FormLabel from './FormLabel'
const AddForm = () => {

   const [name,setName] =useState('okk');
   const [address,setAddress] =useState('');
   const [status,setStatus] =useState('');
   const [user,setUser]=useState('');
   const navigate =useNavigate();

   useEffect(() => {
     
    setUser(
      {
        name:name,
        address:address,
        status:status
      }
    )
    
   }, [name,address,status])
   
   
   const addUserFunction = async (e) => {

    e.preventDefault();
    const { name,address,status} = user;
    
    const res = await fetch("/updaterecords/addnew", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        name,address,status
      })
    })
    const data = await res.json();
    // alert(JSON.stringify(data));
    if (res.status === 422 || !data) {

      console.log("reg no success");
      window.alert("Record Addition Error");
    }
    else {
      console.log("success");
      window.alert("Record Generated");
      // navigate("/");
    }
  }



  return (
    <>
    <div className='addformdiv'>
    <form method='POST'>
    <FormLabel inputfor="Name"/>
    <FormInput 
    onchange={(value)=>{setName(value)}}
    class="inputfield" inputforid="Name" inputtype="text" 
    /> <br /><br />
    <FormLabel inputfor="Address"/>
    <FormInput 
    onchange={(value)=>{setAddress(value)}}
    class="inputfield addressip" inputforid="Address" inputtype="text"
    /> <br /><br />
    <FormLabel  inputfor="Status"/>
    <FormInput  
    onchange={(value)=>{setStatus(value)}}
    class="inputfield statusip" inputforid="Status" inputtype="text"
      /> <br /><br />
    <input className='addbtn' type="submit" value="Add" 
     onClick={(e)=>addUserFunction(e)} />
    </form>
    </div>
   
    </>
  )
}

export default AddForm