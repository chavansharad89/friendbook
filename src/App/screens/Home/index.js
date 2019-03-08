import React from 'react';
import Layout from '../../shared/components/Layout/Layout'; 
import HomePage from './components/HomePage';

const routePath = '/';

const homeRouteDetails = { 
    name: 'home',
    path: routePath,
    exact: true,
    render() {
        return(
            <Layout component={HomePage} />    
        );
    }
}


export {
    homeRouteDetails as HomeRouteDetails
}