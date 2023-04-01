import React, { useEffect, useState } from "react";
import EditButton from "./EditButton";
import "./updateexistingrecords.css";
import FormLabel from "../addform/FormLabel";
import { useNavigate } from "react-router-dom";
//getting data via json file
//const data = require('../../../json/records.json');
//console.log(data);

// for getting name status and address of the selected row
// console.log(editrow.childNodes[0].innerText);
// console.log(editrow.childNodes[1].innerText);
// console.log(editrow.childNodes[2].innerText);

const UpdateExistingRecords = () => {
  const navigate = useNavigate();
  let Data;
  const [records, setRecords] = useState([]);
  const [updaterow, setUpdaterow] = useState("");
  const [updatediv, setUpdatediv] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentstatus, setPaymentstatus] = useState("");

  const getUpdateData = (selectedrow) => {
    let currentname = selectedrow.childNodes[0].innerText;
    let currentaddress = selectedrow.childNodes[1].innerText;
    let currentpaymentstatus = selectedrow.childNodes[2].innerText;

    // let updatenameinputelement =
    //   selectedrow.parentNode.nextSibling.childNodes[1].childNodes[0]
    //     .childNodes[1];
    // let updateaddressinputelement =
    //   selectedrow.parentNode.nextSibling.childNodes[1].childNodes[0]
    //     .childNodes[6];
    let updatepaidinputradioelement =
      selectedrow.parentNode.nextSibling.childNodes[1].childNodes[0]
        .childNodes[9];
    let updateunpaidinputradioelement =
      selectedrow.parentNode.nextSibling.childNodes[1].childNodes[0]
        .childNodes[11];

    // console.log("...currentname..",currentname);
    // console.log("...currentaddress..",currentaddress);
    // console.log("...currentpaymentstatus..",currentpaymentstatus);
    // console.log("...updatenameinputelement..",updatenameinputelement);
    // console.log("...updateaddressinputelement..",updateaddressinputelement);
    // console.log("........updatepaidinputelement......",updatepaidinputradioelement);
    // console.log("........updateunpaidinputradioelement......",updateunpaidinputradioelement);

    // updatenameinputelement.innerText = currentname;
    setName(currentname);
    // updateaddressinputelement.innerText = currentaddress;
    setAddress(currentaddress);

    setPaymentstatus(currentpaymentstatus);
    if (currentpaymentstatus === "Paid") {
      updatepaidinputradioelement.checked = "true";
    } else if (currentpaymentstatus === "Unpaid") {
      updateunpaidinputradioelement.checked = "true";
    }
  };

  const highlightRow = (selectedrow, action) => {
    if (action === "edit") {
      selectedrow.style.backgroundColor = "rgb(77, 31, 110)";
      selectedrow.parentNode.nextSibling.style.display = "block";
      setUpdatediv(selectedrow.parentNode.nextSibling);
      getUpdateData(selectedrow);
    } else if (action === "delete") {
      selectedrow.style.backgroundColor = "rgb(77, 31, 110)";
      deleteRecord(selectedrow);
    }
  };
  const unHighlightRow = (selectedrow) => {
    selectedrow.style.backgroundColor = "transparent";
  };

  ///////////////////////////////////////get data from db start/////////////////////////////

  const getRecords = async () => {
    let res;
    res = await fetch(`/showrecords`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    });

    Data = await res.json();

    // console.log(Data[0].full_name);
    // alert(Data[0].full_name);
    // alert(JSON.stringify(Data));
    // console.log(Data)
    if (res.status === 401) {
      navigate("/unauthorized");
    } else if (res.status === 404 || !Data) {
      // console.log("Error ! Could not fetch records");
      window.alert("Error ! Could not fetch records");
    } else {
      console.log("Records fetched");

      setRecords(Data);
      // console.log(".......fetched data.....", Data)
    }
  };

  useEffect(() => {
    getRecords();
  }, []);

  ///////////////////////////////////get data from db end////////////////////////////////////////

  /////////////////////////////////////delete data from db start////////////////////////////////

  const deleteRecord = async (selectedrow) => {
    const { id } = selectedrow;

    const res = await fetch("/updaterecords/updateexisting/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    const result = await res.json();

    if (res.status === 422) {
      window.alert("Deletion Error");
    } else {
      alert("Record Deleted !");
      unHighlightRow(selectedrow);
      getRecords();
    }
  };
  ///////////////////////////////////delete data from db end/////////////////////////////////////

  ///////////////////////////////update data in db start/////////////////////////////////////////

  const updateRecords = async (e) => {
    e.preventDefault();

    if (name !== "") {
      if (address !== "") {
        if (paymentstatus !== "") {
        } else {
          alert("Please select payment status");
          return;
        }
      } else {
        alert("Please enter address");
        return;
      }
    } else {
      alert("Please enter name");
      return;
    }

    const res = await fetch("/updaterecords/updateexisting/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: updaterow.id,
        name: name,
        address: address,
        status: paymentstatus,
      }),
    });

    const result = await res.json();

    if (res.status === 422) {
      alert(
        "Payment status not updated"
      );
    } else {
      alert("Updation Successfull !");
      updatediv.style.display = "none";
      unHighlightRow(updaterow);
      getRecords();
    }
  };

  /////////////////////////////////update data in db end//////////////////////////

  ///////////////////////////closing updateinput div start///////////////////////
  const closeupdatediv = () => {
    updatediv.style.display = "none";
    updaterow.style.backgroundColor = "transparent";
  };
  ///////////////////////////closing updateinput div end////////////////////////

  ///////////////////////test function/////////////////////
  // const fun = (e)=>{                                  //
  //  e.preventDefault();                                //
  //  console.log("...updatedivclose...",updatediv);     //
  // }                                                   //
  /////////////////////////////////////////////////////////

  return (
    <>
      <table className="updateexisttble">
        <tr className="updateexistrow">
          <th className="updateexistth">Name</th>
          <th className="updateexistth">Address</th>
          <th className="updateexistth">Status</th>
        </tr>
        {records.map((ele) => {
          return (
            <>
              <tr id={ele._id} className="updateexistrow">
                <td key={`${ele._id}.${ele.name}`} className="updateexisttd">
                  {ele.name}
                </td>
                <td key={`${ele._id}.${ele.address}`} className="updateexisttd">
                  {ele.address}
                </td>
                <td key={`${ele._id}.${ele.status}`} className="updateexisttd">
                  {ele.status}
                </td>
                <EditButton
                  onclick={(e) => {
                    setUpdaterow(e.target.parentNode);
                    highlightRow(e.target.parentNode, "edit");
                  }}
                  buttonclass="updateexisteditbtn"
                  spanclass="material-symbols-outlined"
                  spantext="edit"
                />
                <EditButton
                  onclick={(e) => {
                    highlightRow(e.target.parentNode, "delete");
                  }}
                  buttonclass="updateexistdelbtn"
                  spanclass="material-symbols-outlined"
                  spantext="delete"
                />
              </tr>
            </>
          );
        })}
      </table>
      <div className="updateinputdiv">
        <div>
          <button
            onClick={() => closeupdatediv()}
            className="closelogo material-symbols-outlined"
          >
            close
          </button>
        </div>
        <div className="updateform">
          <form method="POST">
            <FormLabel inputfor="Name" />
            <span
              // onChange={(e) => {
              //   setName(e.target.value);
              // }}
              className="updateinputfield nameip"
              type="text"
              id="Name"
              
            >
            {`${name}`}
           </span>
            <br />
            <br />
            <FormLabel inputfor="Address" />

            <span
              // onChange={(e) => {
              //   setAddress(e.target.value);
              // }}
              className="updateinputfield addressip"
              type="text"
              id="Address"
              
            >
              {`${address}`}
            </span>
            <br />
            <br />
            <FormLabel inputfor="Status" />
            <input
              type="radio"
              name="paymentstatus"
              id="Paid"
              value="Paid"
              className="updatepaidradiobtn"
              onClick={(e) => setPaymentstatus(e.target.value)}
            />
            <label htmlFor="Paid" className="updatepaidlabel">
              Paid{" "}
            </label>

            <input
              type="radio"
              name="paymentstatus"
              id="Unpaid"
              value="Unpaid"
              className="updateunpaidradiobtn"
              onClick={(e) => setPaymentstatus(e.target.value)}
            />
            <label htmlFor="Unpaid" className="updateunpaidlabel">
              Unpaid{" "}
            </label>

            <input
              className="updateaddbtn"
              type="submit"
              value="Update"
              onClick={(e) => updateRecords(e)}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateExistingRecords;
