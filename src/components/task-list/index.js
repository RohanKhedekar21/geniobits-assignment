import React from 'react';
import './style.css'

export const TaskList = ({ users, pageNumber, setPageNumber }) => {
    console.log(">>>Inside TaskList", users);


    return (
        <div style={{ display: 'flex', padding: '10px', backgroundColor: 'whitesmoke', width: '100%', height: 'fit-content', borderRadius: '10px', display: 'flex', flexDirection: 'column', }}>
            <div style={{ alignSelf: 'start' }}>
                <span>Task List</span>
            </div>

            <hr style={{ width: '100%' }} />
            <br />

            <div style={{ display: 'flex', justifyContent: 'space-between', border: '0.5px solid darkgrey', borderRadius: '10px', padding: '5px 15px 5px 15px', alignItems: 'center' }}>
                {/* Search bar */}
                <div>
                    <input placeholder='Search User' style={{ WebkitAppearance: "none", outline: 'none', border: 'none', background: 'none', width: '800px' }} />
                </div>

                {/* pagination */}
                <div style={{ alignSelf: 'end' }}>
                    <span style={{ cursor: 'pointer' }}
                        onClick={() => {
                            const newPageNumber = pageNumber - 1;
                            /* Checked pageNumber is not goes below 1 */
                            if (newPageNumber >= 1) {
                                setPageNumber(newPageNumber)
                            }
                        }}
                    > {'<'} </span>
                    <span>{`${(users.per_page * (users.page - 1)) + 1} - ${(users.per_page * users.page)} of ${users.total}`}</span>
                    <span style={{ cursor: 'pointer' }}
                        onClick={() => {
                            const newPageNumber = pageNumber + 1;
                            /* Checked pageNumber is not goes above total pages present */
                            if (newPageNumber <= users?.total_pages) {
                                setPageNumber(newPageNumber)
                            }
                        }}
                    > {'>'} </span>
                </div>
            </div>

            <br />

            <div>
                <table width='100%'>
                    <thead>
                        <th>ID</th>
                        <th>email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </thead>
                    {
                        users && users?.data?.length > 0 ?
                            users?.data?.map(item => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.email}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                    </tr>
                                )
                            })
                            :
                            "Loading..."
                    }
                </table>
            </div>
        </div>
    )
}