import React, { useEffect, useState }  from 'react'
import { useNavigate } from 'react-router-dom';

//for getting data from json file
// const data = require("../../json/records.json");
// const {records} =data;




const RecordsTable = () => {

const navigate = useNavigate();  
///////////////////////////////////////get db data/////////////////////////////
let Data =[];
const [recordss, setRecordss] = useState([]);

const getfunction = async () => {
    let res;
    
    res = await fetch(`/showrecords`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
       "Accept": "application/json"
       },
       "credentials" :"include"
      });
  
    Data = await res.json();
    // console.log(Data[0].name);
    // alert(Data[0].name);
    // alert(JSON.stringify(Data));
    console.log("..client showrecords res data..",Data)
    if(res.status===401){
        
        navigate('/unauthorized');
    }
    else if (res.status === 404 || !Data) {

      console.log("Error ! Could not fetch records");
      window.alert("Error ! Could not fetch records");
    }
    else {
      console.log("Records fetched");
      setRecordss(Data);
      console.log("....client showrecords fetched Data.......",Data);
    }
  }

 useEffect(() => {
   getfunction();
 },[]);
 
/////////////////////////////db data///////////////////////////////////////////////




  return (
    <>
        <table className='updateexisttble'>
                <tr className='updateexistrow'>
                    <th className='updateexistth'>Name</th>
                    <th className='updateexistth'>Address</th>
                    <th className='updateexistth'>Status</th>
                </tr>
                {
                    recordss.map((ele) => {
                        return (
                            <>
                                <tr className='updateexistrow'>
                                    <td className='updateexisttd'>{ele.name}</td>
                                    <td className='updateexisttd'>{ele.address}</td>
                                    <td className='updateexisttd'>{ele.status}</td>
                                </tr>

                            </>


                        )
                    })
                }

            </table>
    </>
  )
}

export default RecordsTable