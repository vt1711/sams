import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import './viewrecords.css'

const ViewRecords = () => {
  return (
    <>
      <div className='viewrecordsoptiondiv'>

        <span class='recordsheading'>Records</span>
        <NavLink to='listview'
         className= {({isActive})=>"material-symbols-outlined viewrecordstypelogos  listlogo" + (isActive ? " viewrecordstypelogosactive " : "" )} 
        >
        format_list_bulleted
        </NavLink>
       
        <NavLink to='graphicalview'
         className= {({isActive})=>"material-symbols-outlined viewrecordstypelogos  piechartlogo" + (isActive ? " viewrecordstypelogosactive " : "" )} >
        pie_chart
        </NavLink>

       

      </div>

      <Outlet/>



    </>

  )
}

export default ViewRecords