import React from 'react';
import './style.css';

export const TaskCounter = () => {
    return (
        <div className='main-container'>
            <div className='taskCounterRow'>
                <div className='taskCounterHeading'>
                    <span>Tasks</span>
                    <input type="date" />
                </div>
                <hr />
                <div className='taskCounterCardRow'>
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