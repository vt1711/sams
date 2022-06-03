import React ,{useEffect,useState}from 'react'
import EditButton from './EditButton'
import './updateexistingrecords.css'
//getting data via json file
// const data = require('../../../json/records.json');
// // console.log(data);


const UpdateExistingRecords = () => {
    //json file destructuring
    // const { records } = data;

    // const Records = [
    //     { name: "abhi ", address: "margao ", status: " paid" },
    //     { name: "kabhi ", address: "panjim ", status: "paid " },
    //     { name: "tabhi ", address: "ponda ", status: "unpaid " },
    //     { name: "abhi ", address: "margao ", status: " paid" },
    //     { name: "kabhi ", address: "panjim ", status: "paid " },
    //     { name: "tabhi ", address: "ponda ", status: "unpaid " },
    //     { name: "abhi ", address: "margao ", status: " paid" },
    //     { name: "kabhi ", address: "panjim ", status: "paid " },
    //     { name: "tabhi ", address: "ponda ", status: "unpaid " },
    //     { name: "abhi ", address: "margao ", status: " paid" },
    //     { name: "kabhi ", address: "panjim ", status: "paid " },
    //     { name: "tabhi ", address: "ponda ", status: "unpaid " },
    //     { name: "abhi ", address: "margao ", status: " paid" },
    //     { name: "kabhi ", address: "panjim ", status: "paid " },
    //     { name: "tabhi ", address: "ponda ", status: "unpaid " }

    // ]

  ///////////////////////////////////////db data fetch/////////////////////////////
  let Data;
  const [records, setRecords] = useState([]);

  const getfunction = async () => {
    let res;
    res = await fetch(`/showrecords`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

      }
    });

    Data = await res.json();
    // console.log(Data[0].full_name);
    // alert(Data[0].full_name);
    // alert(JSON.stringify(Data));
    console.log(Data)
    if (res.status === 422 || !Data) {

      console.log("Error ! Could not fetch records");
      window.alert("Error ! Could not fetch records");
    }
    else {
      console.log("Records fetched");
    //   window.alert("Records fetched");

      // console.log("dataaaaaaaa pre");
      // console.log(Data);
      // console.log("cetntereeeeeeeee pre");
      // console.log(center);


      setRecords(Data);
      console.log("dataaaaaaaaaaaaaaaaaa.....")
      // console.log("cetntereeeeeeeee post");
      console.log(Data);
    }
  }

  useEffect(() => {
    getfunction();


  }, []);

  ////////////////////////////////////////////////////////////////////////////////////////////

  
  /////////////////////////////////////delete data from db//////////////////
  const [selectedrecord,setSelectedrecord] = useState('');
  const [row,setRow]= useState('');



  const deleteRecord = async (selectedrecord)=>{
       
    
    
    const res = await fetch("/updaterecords/updateexisting/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
  
        },
        body: JSON.stringify({
          selectedrecord
        })
      })
      const data = await res.json();
      
      // alert(JSON.stringify(data));
      if (res.status === 422) {
  
        console.log("record deletion not successfull");
        window.alert("record deletion not successfull");
      }
      else {
       
        window.alert("record deletion successfull");
        
        
      }
    
  } 

  
  
  useEffect(() => {
    
    // console.log(row);
    
    deleteRecord(selectedrecord);
   
  
    
  }, [selectedrecord])



  ////////////////////////////////////////////////////////////////////////
  
  
    return (
        <>
            <table className='updateexisttble'>
                <tr className='updateexistrow'>
                    <th className='updateexistth'>Name</th>
                    <th className='updateexistth'>Address</th>
                    <th className='updateexistth'>Status</th>
                </tr>
                {
                    records.map((ele) => {
                        return (
                            <>
                                <tr id={ele._id} className='updateexistrow'>
                                    <td key={ele._id}  className='updateexisttd'>{ele.name}</td>
                                    <td key={ele._id}  className='updateexisttd'>{ele.address}</td>
                                    <td key={ele._id}  className='updateexisttd'>{ele.status}</td>
                                    <EditButton
                                     buttonclass='updateexisteditbtn' spanclass='material-symbols-outlined' spantext='edit' />
                                    <EditButton 
                                     onclick={(e)=>{setRow(e.target.parentNode.style.backgroundColor="rgb(77, 31, 110)");setSelectedrecord(e.target.parentNode.id); }}
                                     buttonclass='updateexistdelbtn' spanclass='material-symbols-outlined' spantext='delete' />
                                </tr>

                            </>


                        )
                    })
                }

            </table>


        </>
    )
}

export default UpdateExistingRecords