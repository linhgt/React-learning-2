import React from 'react';
import UsersData from './data.js';
import '../../assets/css/Users.css';
import UserPage from './UserPage.jsx';
import { Table } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class UsersView extends React.Component {
    constructor(props) {
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
        //Using props history require withRouter from react router dom
        this.props.history.push({
            pathname:itemPath,
            state:{
                name:data.name,
                age:data.age,
                birth:data.birth,
                address:data.address
            }
        });
    };

    render() {
        return (
            <div>
                <div id="user-list">
                    <Table style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {UsersData.map((data, key) => {
                                return (
                                    <tr key={key} onClick={(e) => { this.Open(key, data, e) }}>
                                        <td>{key}</td>
                                        <td>{data.name}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default withRouter(UsersView);