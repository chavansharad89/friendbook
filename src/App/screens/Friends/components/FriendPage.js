import React, { Component } from 'react';
//import PageTitle from './App/shared/components/PageTitle/PageTitle';
import FriendList from './FriendList';


class FriendPage extends Component {
    render() {
        return (
            <div className="friend-page">
                <div className="body-container">
                    <div className="friend-page-header">
                        <FriendList/>
                    </div>
                </div>                                                                                                          
            </div>
        );
    }
}

export default FriendPage;