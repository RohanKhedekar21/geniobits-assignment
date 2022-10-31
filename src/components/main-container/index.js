import React, { useEffect, useState } from 'react';
import { TaskCounter } from '../task-counter';
import { TaskList } from '../task-list';

export const MainContainer = () => {

    const [users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then((res) => res.json())
        .then((json) => setUsers(json))
        .catch((error) => {
            console.log("Found Error", error);
        })
    }, [pageNumber])

    console.log(">>>users",users)
    console.log(">>>")

    return (
        <div style={{ width: '100%', display: 'flex', padding: '30px', display: 'flex', flexDirection: 'column' }}>

            {/* Tasks container */}
            <TaskCounter users={users}/>

            <br />

            {/* Task List Container */}
            <TaskList  
                users={users}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
            />
        </div>
    )
}