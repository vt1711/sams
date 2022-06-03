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

  const deleteRecord = async (deleterecord_id) => {
    // console.log("..............delete.......", deleterecord_id);
    const res = await fetch("/updaterecords/updateexisting/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        deleterecord_id
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
      getRecords();
    }

  };
  ///////////////////////////////////delete data from db end/////////////////////////////////////


  ///////////////////////////////update data in db start/////////////////////////////////////////

  const updateRecords = async (editrecord_id) => {

    // console.log("..............editid.......", editrecord_id);

    const res = await fetch("/updaterecords/updateexisting/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        _id: editrecord_id,
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
                    onclick={(e) => { setRowcss(e.target.parentNode.style.backgroundColor = "rgb(77, 31, 110)"); updateRecords(e.target.parentNode.id); }}
                    buttonclass='updateexisteditbtn' spanclass='material-symbols-outlined' spantext='edit' />
                  <EditButton
                    onclick={(e) => { setRowcss(e.target.parentNode.style.backgroundColor = "rgb(77, 31, 110)"); deleteRecord(e.target.parentNode.id); }}
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