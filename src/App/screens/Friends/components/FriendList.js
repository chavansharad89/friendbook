import React, { Component } from 'react';

const friendList = [{
    friendId: 1,
    firstName: 'Abhijit',
    lastName: 'Nair',
    collegeName: 'Vartak College',
    phoneNumber: '87848451545',
    email: 'abhijit.nair@infojiniconsulting.com'
},{
    friendId: 2,
    firstName: 'Joy',
    lastName: 'Koli',
    collegeName: 'Lions College',
    phoneNumber: '87849454545',
    email: 'joy.koli@infojiniconsulting.com'
},{
    friendId: 3,
    firstName: 'Maya',
    lastName: 'Kakda',
    collegeName: 'Khalsa College',
    phoneNumber: '87843454545',
    email: 'maya.kakda@infojiniconsulting.com'
},{
    friendId: 4,
    firstName: 'Nikhil',
    lastName: 'Namdas',
    collegeName: 'K E L College',
    phoneNumber: '87844454545',
    email: 'abhijit.nair@infojiniconsulting.com'
},{
    friendId: 5,
    firstName: 'Vaibhav',
    lastName: 'Sadasiv',
    collegeName: '',
    phoneNumber: '82848454545',
    email: 'vaibhav.sadasiv@infojiniconsulting.com'
},{
    friendId: 6,
    firstName: 'firoz',
    lastName: 'khan',
    collegeName: 'Nepal College',
    phoneNumber: '87848254545',
    email: 'firoz.khan@infojiniconsulting.com'
},{
    friendId: 7,
    firstName: 'sangeeta',
    lastName: 'kumbre',
    collegeName: 'Nagpur College',
    phoneNumber: '86848454545',
    email: 'abhijit.nair@infojiniconsulting.com'
},{
    friendId: 8,
    firstName: 'Pratiksha',
    lastName: 'Singh',
    collegeName: 'Thane College',
    phoneNumber: '87848754545',
    email: 'pratiksha.singh@infojiniconsulting.com'
}];

class FriendList extends Component {
    render() {
        return (
            <div className="friend-list">
                {
                    friendList.map(friend =>
                        <ul>
                            <li key={ friend.friendId}>
                                <label> Name : </label> { `${friend.firstName} ${friend.lastName}`}  
                            </li>
                            <li>
                                <label> Phone Number : </label> { friend.phoneNumber }  
                            </li>

                            <li>
                                <label> Email : </label> { friend.email }  
                            </li>

                            <li>
                                <label> College Name : </label> { friend.collegeName }  
                            </li>
                        </ul>   
                    )
                }
                                                                    
            </div>
        );
    }
}

export default FriendList;