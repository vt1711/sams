import React from 'react'
import './editbutton.css'

const EditButton = (props) => {
    const {buttonclass ,spanclass,spantext} = props;
    return (
        <>
            <button className={buttonclass}>
                <span class={spanclass}>
                    {spantext}
                </span>
            </button>
        </>
    )
}

export default EditButton