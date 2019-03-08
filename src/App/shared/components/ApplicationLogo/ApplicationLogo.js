import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../images/friendbook-logo.jpg';
const url = '/';

const applicationLogo = () =>{
    return (
        <div className="app-logo">
            <Link to={url}>
                <img src={logoPath} alt="Friendbook Logo" className="img-fluid"/>
            </Link>
        </div>
    );
}

export default applicationLogo;