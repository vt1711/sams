import React from 'react'
import './errorpage.css'
import {useNavigate} from 'react-router-dom';

const Errorpage = (props) => {
  const navigate = useNavigate();
  const {imgsrc,errorname,errormessage,errorbtntext} = props;
  return (
    <>
      <div className='outerdiv' >
         <div className='errorlogo'>
           
           <img className='errorlogo' src={imgsrc} alt='unauthorizedimg'/>
         </div>
         <div className='errortext' >
         <span className='error'>Error</span> <br />
           <span className='errortype' >{errorname}</span> <br />
           <span className='message'>{errormessage}</span> <br /><br /><br /> 
           <button className='loginredirectbtn' onClick={()=>navigate('/')} >{errorbtntext}</button>
         </div>
      </div>
    </>
  )
}

export default Errorpage