import React from 'react';
import Layout from '../../shared/components/Layout/Layout'; 
import FriendPage from './components/FriendPage';

const routePath = '/friends';

const friendsRouteDetails = { 
    name: 'friends',
    path: routePath,
    exact: true,
    render() {
        return(
            <Layout component={FriendPage} />    
        );
    }
}


export {
    friendsRouteDetails as FriendsRouteDetails
}