import React from "react";
// import image from "./"
const Infoblock = ({ blocktype, text,texttitle, image }) => {
  if (blocktype === "lefttext") {
    return (
      <>
        <div className="infoblock lefttext">
          <div className="imagefeaturesblock material-symbols-outlined">
            {image.img1}
          </div>
          <div className="textfeaturesblock">
            <p className="featurestexttitles">{texttitle}</p>
            <h3>{text}</h3>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="infoblock righttext">
        <div className="imagefeaturesblock">
          <div className="imagefeaturesblockimg1 material-symbols-outlined">
            {image.img1}
          </div>
          {/* <div className="imagefeaturesblockimg1 material-symbols-outlined">{image.img2}</div> */}
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
