import React, { useEffect, useState }  from 'react'

//for getting data from json file
// const data = require("../../json/records.json");
// const {records} =data;




const RecordsTable = () => {

  
///////////////////////////////////////db data/////////////////////////////
let Data =[];
const [recordss, setRecordss] = useState([]);

const getfunction = async () => {
    let res;
    
    res = await fetch(`/showrecords`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
       }
      });
  
    Data = await res.json();
    // console.log(Data[0].name);
    // alert(Data[0].name);
    // alert(JSON.stringify(Data));
    console.log(Data)
    if (res.status === 422 || !Data) {

      console.log("Error ! Could not fetch records");
      window.alert("Error ! Could not fetch records");
    }
    else {
      console.log("Records fetched");
      // window.alert("Records fetched");

      // console.log("dataaaaaaaa pre");
      // console.log(data);
      // console.log("cetntereeeeeeeee pre");
      // console.log(center);


      setRecordss(Data);
      console.log("....Data.......",Data);
    
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