import React from 'react'
import EditButton from './EditButton'
import './updateexistingrecords.css'

const UpdateExistingRecords = () => {

    const records = [
        { name: "abhi ", address: "margao ", status: " paid" },
        { name: "kabhi ", address: "panjim ", status: "unpaid " },
        { name: "tabhi ", address: "ponda ", status: "paid " }
    ]


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
                                <tr className='updateexistrow'>
                                    <td className='updateexisttd'>{ele.name}</td>
                                    <td className='updateexisttd'>{ele.address}</td>
                                    <td className='updateexisttd'>{ele.status}</td>
                                    <EditButton buttonclass='updateexisteditbtn' spanclass='material-symbols-outlined' spantext='edit' />
                                    <EditButton buttonclass='updateexistdelbtn' spanclass='material-symbols-outlined' spantext='delete' />
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