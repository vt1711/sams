import React from "react";
import "./features.css";
import Infoblock from "./Infoblock";

const Features = () => {
  return (
    <>
      <div className="featuresdiv">
        <h1 className="featuresh1">Features</h1>
        <div className="infobox">
          <Infoblock
            blocktype="leftlogo"
            texttitle="Secure Access"
            text=" All your records are securely stored in the database and can be accessed only after logging in with the credentials. "
          />
          <Infoblock
            blocktype="rightlogo"
            texttitle="Visualise"
            text="Visualise the data in an affective manner with the pie chart respresentation and get to know the statistics faster."
          />
          <Infoblock
            blocktype="leftlogo"
            texttitle="Live Search"
            text="Easily find a specific record by entering record name in the search box"
          />
          <Infoblock
            blocktype="rightlogo"
            texttitle="Manage Records"
            text="Easily view and manage the records. One can add new record, delete entire record or update specific columns of existing records"
          />
          <Infoblock
            blocktype="leftlogo"
            texttitle="Mobile Friendly"
            text="With the mobile friendly UI one can use the app on pc as well as mobile and manage the records any time"
          />
        </div>
      </div>


    </>
  );
};

export default Features;
