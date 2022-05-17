import React from 'react'
import './updaterecords.css'
import { NavLink ,Outlet} from 'react-router-dom'
const UpdateRecords = () => {
  return (
    <>
        <h1>Update Records</h1>
        <div className='updateoptionsdiv'>
          <NavLink activeClassName='active' className=' updateoptions updateexisting' to='updateexisting'>Update Existing Records</NavLink>
          <NavLink activeClassName='active' className='updateoptions addnew' to='addnew'>Add New Records</NavLink>
       </div>
        <Outlet/>
    </>
  )
}

export default UpdateRecords