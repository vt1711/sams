import React from 'react'
import EditButton from './EditButton'
import './updateexistingrecords.css'
const data = require('../../../json/records.json');
// console.log(data);


const UpdateExistingRecords = () => {
    
    const { records } = data;

    // const Records = [
    //     { name: "abhi ", address: "margao ", status: " paid" },
    //     { name: "kabhi ", address: "panjim ", status: "paid " },
    //     { name: "tabhi ", address: "ponda ", status: "unpaid " },
    //     { name: "abhi ", address: "margao ", status: " paid" },
    //     { name: "kabhi ", address: "panjim ", status: "paid " },
    //     { name: "tabhi ", address: "ponda ", status: "unpaid " },
    //     { name: "abhi ", address: "margao ", status: " paid" },
    //     { name: "kabhi ", address: "panjim ", status: "paid " },
    //     { name: "tabhi ", address: "ponda ", status: "unpaid " },
    //     { name: "abhi ", address: "margao ", status: " paid" },
    //     { name: "kabhi ", address: "panjim ", status: "paid " },
    //     { name: "tabhi ", address: "ponda ", status: "unpaid " },
    //     { name: "abhi ", address: "margao ", status: " paid" },
    //     { name: "kabhi ", address: "panjim ", status: "paid " },
    //     { name: "tabhi ", address: "ponda ", status: "unpaid " }

    // ]


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
                                    <td key={ele.name} className='updateexisttd'>{ele.name}</td>
                                    <td key={ele.name} className='updateexisttd'>{ele.address}</td>
                                    <td key={ele.name} className='updateexisttd'>{ele.status}</td>
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