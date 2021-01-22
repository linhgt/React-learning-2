import React, { Component } from 'react';
import UsersView from '../components/Users/UsersView.jsx';

class UserList extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            list: []
        }
    }

    render(){
        return(
            <UsersView />
        );
    }
}

export default UserList;