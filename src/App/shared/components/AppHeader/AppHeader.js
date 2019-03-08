import React from 'react';
import ApplicationLogo from '../ApplicationLogo/ApplicationLogo';
import './AppHeader.css';

const appHeader = ({ title }) => {
    return (
        <div className="app-header">
            <div className="app-header-logo">
                <h1>
                    <ApplicationLogo />
                </h1>
            </div>
            <div className="app-header-title">
                <h1>{title}</h1>
            </div>
        </div>
    );
}


export default appHeader;