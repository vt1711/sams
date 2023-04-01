import React, { useEffect, useState,useContext } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import './viewrecords.css'
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { AiFillPieChart } from 'react-icons/ai';
import {RecordsContext,SearchnameContext} from '../../App'
// import { BsSearch } from 'react-icons/bs';


const ViewRecords = () => {
  const navigate = useNavigate();
  const [searchtext, setsearchtext] = useState("");
  const [names, setnames] = useState([]);
  const [graphview, setgraphview] = useState(true);
  let data;
  const {recordsstate, recordsstatedispatch}=useContext(RecordsContext);
  const {searchnamestate, searchnamestatedispatch}=useContext(SearchnameContext);

  const getfunction = async ()=>{
    let res = await fetch('/showrecords',{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      "credentials":"include"
    });

    data= await res.json();
    if(res.status===401){
      navigate('/unauthorized');
    }
    else if (res.status === 404 || !data) {

      console.log("Error ! Could not fetch records");
      window.alert("Error ! Could not fetch records");
    }
    else {
      console.log("Records fetched");
      recordsstatedispatch({type:"RECORDS",payload:data});      
    }

  }

  useEffect(() => {
    getfunction()

  }, [])

  useEffect(() => {
    // console.log("recordscontexttttt..............",recordscontextstate)
      
      let names=recordsstate.map((value)=>{
        return value.name;
      }
      )
      setnames(names);

  }, [recordsstate])
  



  return (
    <>
      <div className='viewrecordsoptiondiv'>

        <div class='recordsheading'>Records</div>

        <div class='navigationoptions'>
          <div  
            className={graphview === true ? 'searchdiv searchdivhidden ' : 'searchdiv searchdivvisible'}
          >
            <input placeholder="Search By Name" type="search" list='searchtextlist' className="searchtext" id="searchtext"
              onChange={(e) => { setsearchtext(e.target.value) }}
            />
            <datalist id="searchtextlist" className="searchtextlist" style={{color:"red"}}>
            {names.map((name)=>{
              return <option value={name}/>
            })}
              
            </datalist>
            {searchnamestatedispatch({type:"SEARCHNAME",payload:searchtext})}
            {/* <BsSearch className='searchicon' /> */}
          </div>

          <div className='viewrecordstypelogos'>
            <NavLink to='listview'
              onClick={() => { setgraphview(false) }}
            >
              <AiOutlineUnorderedList
                className={graphview === false ? 'listlogo viewrecordslogoactive' : 'listlogo viewrecordslogoinactive'}
              />
            </NavLink>

            <NavLink to='graphicalview'
              onClick={() => { setgraphview(true) }}
            >
              <AiFillPieChart
                className={graphview === true ? 'piechartlogo viewrecordslogoactive' : 'piechartlogo viewrecordslogoinactive'}
              />
            </NavLink>
          </div>
        </div>
      </div>

      <Outlet />



    </>

  )
}

export default ViewRecords