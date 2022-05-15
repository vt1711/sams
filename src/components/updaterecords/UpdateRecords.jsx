import React from 'react'
import './updaterecords.css'
import { NavLink ,Outlet} from 'react-router-dom'
const UpdateRecords = () => {
  return (
    <>
        <h1>Update Records</h1>
        <div className='updateoptionsdiv'>
          <div className=' updateoptions'>
             <NavLink activeClassName='active' className='updateexisting' to='updateexisting'>Update Existing Records</NavLink>
          </div>
          <div className=' updateoptions'> 
            <NavLink activeClassName='active' className='addnew' to='addnew'>Add New Records</NavLink>
             
          </div>
          
        </div>
        <Outlet/>
    </>
  )
}

export default UpdateRecords