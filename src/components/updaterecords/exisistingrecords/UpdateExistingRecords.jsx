import React ,{useEffect,useState}from 'react'
import EditButton from './EditButton'
import './updateexistingrecords.css'
//getting data via json file
//const data = require('../../../json/records.json');
//console.log(data);



const UpdateExistingRecords = () => {
  //json file destructuring
  // const { records } = data;

  const [rowcss, setRowcss] = useState('');
 
  const highlightRow =(selectedrow,action)=>{
    if(action==="edit"){
      selectedrow.style.backgroundColor="rgb(77, 31, 110)";
      updateRecords(selectedrow);
      console.log(selectedrow)

    }
    else if(action==="delete") {
      selectedrow.style.backgroundColor="rgb(77, 31, 110)";
      deleteRecord(selectedrow);
    }
      
  }
  const unHighlightRow = (selectedrow)=>{
      // console.log("....row....",rowcss);
      selectedrow.style.backgroundColor="transparent";
  }

  ///////////////////////////////////////get data from db start/////////////////////////////
  let Data;
  const [records, setRecords] = useState([]);
  const getRecords = async () => {
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
    // console.log(Data)

    if (res.status === 422 || !Data) {

      // console.log("Error ! Could not fetch records");
      window.alert("Error ! Could not fetch records");
    }
    else {
      console.log("Records fetched");

      setRecords(Data);
      console.log(".......fetched data.....", Data)

    }
  }

  useEffect(() => {
    getRecords();


  }, []);

  ///////////////////////////////////get data from db end////////////////////////////////////////


  /////////////////////////////////////delete data from db start////////////////////////////////

  const deleteRecord = async (selectedrow) => {
    // console.log("..............delete.......", deleterecord_id);
    const {id} = selectedrow;
    console.log("....delete fun....",id);
    const res = await fetch("/updaterecords/updateexisting/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id
      })
    })
    const result = await res.json();

    // console.log(".............delete..result..........", result);
    if (res.status === 422) {

      // console.log("record deletion not successfull");
      window.alert("record deletion not successfull");
    }
    else {

      // console.log("record deletion successfull",result);
      alert("record deletion successfull");
      unHighlightRow(selectedrow);
      getRecords();
    }

  };
  ///////////////////////////////////delete data from db end/////////////////////////////////////


  ///////////////////////////////update data in db start/////////////////////////////////////////

  const updateRecords = async (selectedrow) => {

    // console.log("..............editid.......", editrecord_id);

    const res = await fetch("/updaterecords/updateexisting/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        _id: selectedrow.id,
        name: 'Shyam',
        address: 'oookkk',
        status: 'unpaid',
      })
    })
    const result = await res.json();

    if (res.status === 422) {
      // console.log("updation failed");
      alert("updation failed");

    }
    else {
      // console.log("updation successfull", result);
      alert("updation successfull");
      unHighlightRow(selectedrow);
      getRecords();
    }
  };

  /////////////////////////////////update data in db end///////////////////////////////////////

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
                  <td key={`${ele._id}.${ele.name}`} className='updateexisttd'>{ele.name}</td>
                  <td key={`${ele._id}.${ele.address}`} className='updateexisttd'>{ele.address}</td>
                  <td key={`${ele._id}.${ele.status}`} className='updateexisttd'>{ele.status}</td>
                  <EditButton
                    onclick={(e) => { highlightRow(e.target.parentNode,"edit"); }}
                    buttonclass='updateexisteditbtn' spanclass='material-symbols-outlined' spantext='edit' />
                  <EditButton
                    onclick={(e) => { highlightRow(e.target.parentNode,"delete"); }}
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