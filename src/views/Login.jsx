import React from 'react';
import '../assets/css/Login.css';


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
    }

    render()
    {
        return(
            <div class="wrapper">
                <form onSubmit={this.handleSubmit}>
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>

                    <button type="submit" >Login</button>
                    <label>
                    </label>
                </form>
            </div>
        );
    }
}

export default Login;