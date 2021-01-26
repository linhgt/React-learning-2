import React from 'react';
import '../assets/css/Login.css';
import CustomButton from '../components/CustomButton/CustomButton.jsx';


 class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        this.props.history.push("/admin/dashboard");
        event.preventDefault();
        console.log(this.props);
    }

    render()
    {
        return(
            <div className="wrapper">
                <form id="login-form" onSubmit={this.handleSubmit}>
                    <h1>Log In</h1>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>

                    <CustomButton id="login-button" type="submit" bsStyle = "primary" className="btn-fill btn-block">Login</CustomButton>
                    <label>
                    </label>
                </form>
            </div>
        );
    }
}

export default Login;