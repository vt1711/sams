import React from 'react'
import './editbutton.css'

const EditButton = (props) => {
    const {buttonclass ,spanclass,spantext} = props;
    return (
        <>
            <button className={`${buttonclass} ${spanclass}`} onClick={(e)=>props.onclick(e)} >
                
                    {spantext}
               
            </button>
        </>
    )
}

export default EditButton