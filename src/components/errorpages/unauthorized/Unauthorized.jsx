import React from 'react'
import './unauthorized.css'
import unauthorizedimg from './unauthorizedimg.png'
import {useNavigate} from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className='outerdiv' >
         <div className='errorlogo'>
           
           <img className='errorlogo' src={unauthorizedimg} alt='unauthorizedimg'/>
         </div>
         <div className='errortext' >
         <span className='error'>Error</span> <br />
           <span className='errortype' >401</span> <br />
           <span className='message'>Unauthorized access . kindly login</span> <br /><br /><br /> 
           <button className='loginredirectbtn' onClick={()=>navigate('/')} >Login</button>
         </div>
      </div>
    </>
  )
}

export default Unauthorized