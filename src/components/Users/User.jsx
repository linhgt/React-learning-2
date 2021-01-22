import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import UsersView from './UsersView.jsx';
import UserPage from './UserPage.jsx';

//Outside parent component that responsible only to route the User's List page and the User's Page

class User extends React.Component{
    /*constructor(props)
    {
        super(props);
        this.state = {
            userClicked: false,
            uName: '',
            uAge: '',
            uBirth: '',
            uAddress: '',
            URL:'',
        }
        this.Open = this.Open.bind(this);
    }

    Open(key, data, e) {
        e.preventDefault();
        const itemPath = `/admin/userslist/details/${key}`;
        this.setState({
            userClicked: true,
            uName: data.name,
            uAge: data.age,
            uBirth: data.birth,
            uAddress: data.address,
            URL: itemPath
        });
        this.props.history.push(itemPath);
    };*/

    render(){
        return(
            <Switch>
                <Route path="/admin/userslist/details/:id" render={UserPage}/>
                <Route path="/admin/userslist" component={UsersView}/>
            </Switch>
        )
    }
};

export default withRouter(User);