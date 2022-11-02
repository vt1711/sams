import React from "react";
import "./features.css";
import Infoblock from "./Infoblock";

const Features = () => {
  return (
    <>
      <h1 className="featuresh1">Features</h1>
      <div className="infobox">
        <Infoblock
          blocktype="lefttext"
          texttitle="Secure Access"
          text=" All the account records are securely stored in the database and can be accessed only after logging in with the credentials. "
          image={{ img1: "admin_panel_settings", img2: "" }}
        />
        <Infoblock
          blocktype="righttext"
          texttitle="Visualise"
          text="Visualise the data in an affective manner with the pie chart respresentation and get to know the statistics faster."
          image={{ img1: "pie_chart", img2: "list" }}
        />
        <Infoblock
          blocktype="lefttext"
          texttitle="Manage Records"
          text="Easily view and manage the records. One can add new record, delete entire record or update specific columns of existing records"
          image={{ img1: "edit_note", img2: "" }}
        />
      </div>
      <Infoblock
        blocktype="righttext"
        texttitle="Mobile Friendly"
        text="With the mobile friendly UI one can use the app on pc as well as mobile and manage the records any time"
        image={{ img1: "devices", img2: "" }}
      />
    </>
  );
};

export default Features;
