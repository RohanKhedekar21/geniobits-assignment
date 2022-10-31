import React from 'react';
import './style.css';

export const SideMenuBar = () => {
    return (
        <div className='Sidebar-menu'>
            <div>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    <li>My Apps</li>
                    <li>Resources</li>
                </ul>
            </div>
            <div >
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    <li>My Organization</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    )
}