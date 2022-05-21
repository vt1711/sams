import React from 'react'
import './updaterecords.css'
import { NavLink ,Outlet} from 'react-router-dom'
const UpdateRecords = () => {
  return (
    <>
        <h1>Update Records</h1>
        <div className='updateoptionsdiv'>
          <NavLink 
           className={ ({isActive})=> "updateoptions updateexisting" + (isActive?" activenavlink ":"")  }
           to='updateexisting'>Update Existing Records</NavLink>
          <NavLink 
           className= { ({isActive})=> "updateoptions addnew" + ( isActive ? " activenavlink " : "" ) }
           to='addnew'>Add New Records</NavLink>
       </div>
        <Outlet/>
    </>
  )
}

export default UpdateRecords