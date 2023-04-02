import React from "react";
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { AiOutlinePieChart } from 'react-icons/ai';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { MdOutlineEditNote } from 'react-icons/md';
import { MdDevices } from 'react-icons/md';


const Imagetype=({texttitle})=>{
  if(texttitle==="Secure Access"){
    return(
      <>
        <MdOutlineAdminPanelSettings/>
      </>
    )
  }
  if(texttitle==="Visualise"){
    return(
      <>
        <AiOutlinePieChart/>
      </>
    )
  }
  if(texttitle==="Live Search"){
    return(
      <>
        <AiOutlineFileSearch/>
      </>
    )
  }
  if(texttitle==="Manage Records"){
    return(
      <>
        <MdOutlineEditNote/>
      </>
    )
  }
  if(texttitle==="Mobile Friendly"){
    return(
      <>
        <MdDevices/>
      </>
    )
  }
  
}


const Infoblock = ({ blocktype, text,texttitle }) => {
    return (
      <>
        <div className={blocktype === "leftlogo" ? "infoblock" : "infoblock rightlogo"}>
          <div className="imagefeaturesblock">
            <Imagetype texttitle={texttitle}/>
          </div>
          <div className="textfeaturesblock">
            <p className="featurestexttitles">{texttitle}</p>
            <h3>{text}</h3>
          </div>
        </div>
      </>
    );
  
};

export default Infoblock;
