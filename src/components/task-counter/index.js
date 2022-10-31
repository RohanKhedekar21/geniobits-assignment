import React from 'react';

export const TaskCounter = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: 'fit-content', boxSizing: 'border-box' }}>
            <div style={{ backgroundColor: 'whitesmoke', borderRadius: '10px', width: '80%', boxSizing: 'border-box', padding: '15px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <span>Tasks</span>
                    <input type="date" />
                </div>
                <hr />
                <div style={{ display: 'flex', justifyContent: 'space-evenly', color: 'white' }}>
                    <div style={{ backgroundColor: 'orange', border: '2px solid orange', borderRadius: '10px', width: '100%', margin: '0 10px 0 10px', display: 'flex', flexDirection: 'column', alignItems: 'self-start', padding: '10px' }}>
                        <span>50</span>
                        <span>Ongoing</span>
                    </div>
                    <div style={{ backgroundColor: 'red', border: '2px solid red', borderRadius: '10px', width: '100%', margin: '0 10px 0 10px', display: 'flex', flexDirection: 'column', alignItems: 'self-start', padding: '10px' }}>
                        <span>50</span>
                        <span>Delayed</span>
                    </div>
                    <div style={{ backgroundColor: 'lightgreen', border: '2px solid lightgreen', borderRadius: '10px', width: '100%', margin: '0 10px 0 10px', display: 'flex', flexDirection: 'column', alignItems: 'self-start', padding: '10px' }}>
                        <span>50</span>
                        <span>Completed</span>
                    </div>
                    <div style={{ backgroundColor: 'skyblue', border: '2px solid skyblue', borderRadius: '10px', width: '100%', margin: '0 10px 0 10px', display: 'flex', flexDirection: 'column', alignItems: 'self-start', padding: '10px' }}>
                        <span>50</span>
                        <span>Total Assigned</span>
                    </div>
                </div>
            </div>
            <div style={{ paddingLeft: '30px', }}>
                <button style={{ height: '25px', borderRadius: '5px', backgroundColor: 'orange', border: 'none', color: 'white' }}>
                    <span style={{ padding: '20px' }}>+ Add New Task</span>
                </button>
            </div>
        </div>
    )
}