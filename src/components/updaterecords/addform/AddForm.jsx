import React ,{useState ,useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
import './addform.css'
import FormInput from './FormInput'
import FormLabel from './FormLabel'
const AddForm = () => {

   const [name,setName] =useState('');
   const [address,setAddress] =useState('');
   const [paymentstatus,setPaymentstatus] =useState('');
   const [user,setUser]=useState('');
  //  const navigate =useNavigate();

   useEffect(() => {
     
    setUser(
      {
        name:name,
        address:address,
        paymentstatus:paymentstatus
      }
    )
    
   }, [name,address,paymentstatus])
   
   
   const addUserFunction = async (e) => {
    
    e.preventDefault();
    
    const { name,address,paymentstatus} = user;

    if(name!==""){ 
       if(address!==""){
          if(paymentstatus!==""){}
          else{ alert("Please select payment status");
                return;
              }
       }
       else{ alert("Please enter address"); 
             return;
           }

    }
    else{ alert("Please enter name");
          return; 
        }

    
    const res = await fetch("/updaterecords/addnew", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        name,address,paymentstatus
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
      setName('');
      setAddress('');
      setPaymentstatus('');
      e.target.parentElement.reset();

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
    inputvalue=""
    /> <br /><br />
    <FormLabel inputfor="Address"/>
    <FormInput 
    onchange={(value)=>{setAddress(value)}}
    class="inputfield addressip" inputforid="Address" inputtype="text"
    inputvalue=""
    /> <br /><br />
    <FormLabel  inputfor="Status"/>
    
    
    <input type="radio" name='paymentstatus' id='Paid' value="Paid" className='paidradiobtn'
      onClick={(e)=>setPaymentstatus(e.target.value)}
    />
    <label htmlFor="Paid" className='paidlabel'>Paid </label>

    <input type="radio" name='paymentstatus' id='Unpaid' value="Unpaid" className='unpaidradiobtn'
      onClick={(e)=>setPaymentstatus(e.target.value)}
    />
    <label htmlFor="Unpaid" className='unpaidlabel'>Unpaid </label>

     
    <input className='addbtn' type="submit" value="Add" 
     onClick={(e)=>addUserFunction(e)} />
    </form>
    </div>
   
    </>
  )
}

export default AddForm