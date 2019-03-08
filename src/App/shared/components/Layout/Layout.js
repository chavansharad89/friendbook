import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
const AppTitle = 'Friendsbook';

const layout = ({
    component: Component
}) => {
    return (
        <div className="app-layout">
            <AppHeader title= { AppTitle }/>
            <div className="main">
            </div>
            <div className="component">
            <Component />
            </div>
            <AppFooter/>
        </div>
    );
}

export default layout;