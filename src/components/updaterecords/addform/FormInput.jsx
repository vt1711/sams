import React from "react";
import { useState } from "react";
import "./forminput.css";
const FormInput = (props) => {
  const [inputvaluestate, setinputvaluestate] = useState(`${props.inputvalue}`);
  return (
    <>
      <input
        onChange={(e) => {
          setinputvaluestate(e.target.value);
          props.onchange(e.target.value);
        }}
        className={props.class}
        type={props.inputtype}
        id={props.inputforid}
        value={inputvaluestate}
      />
    </>
  );
};

export default FormInput;
