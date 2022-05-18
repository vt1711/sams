import React from 'react'
const data = require("../../json/records.json");
const {records} =data;

const RecordsTable = () => {
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
                                </tr>

                            </>


                        )
                    })
                }

            </table>
    </>
  )
}

export default RecordsTable