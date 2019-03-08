import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    FriendsRouteDetails
} from './screens/Friends/index';
import {
    HomeRouteDetails
} from './screens/Home/index';
const app = () => {
    return (
        <div className="app">
        <Switch>
            <Route {...HomeRouteDetails} />
            <Route {...FriendsRouteDetails} />
        </Switch>
        </div>
    );
}

export { app as App };