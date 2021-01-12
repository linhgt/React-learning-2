import React, {Component} from 'react';
import NewDropDown from 'components/NewDropDown/NewDropDown.jsx';

class Form extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            username:"",
            password:"",
            address:"",
        };
    }

    handleUsernameChange = (event)=>{
        this.setState({
            username:event.target.value
        });
    };

    handlePasswordChange =(event) =>{
        this.setState({
            password:event.target.value
        });
    };

    handleAddressChange = (event) => {
        this.setState({
            address:event.target.value
        });  
    };

    handleSubmit = (event) =>{
        console.log("the new username is: " + this.state.username + " and the new password is: "+ this.state.password);
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        username:
                        <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </label>
                    <br/>

                    <label>
                        password:
                        <input type="text" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </label>
                    <br/>

                    <label>
                        Address:
                    </label>
                    <br/>
                    <textarea rows="5" cols ="60" name="Address" 
                        value={this.state.address} onChange={this.handleAddressChange}>
                    </textarea>
                    <br/>
                    
                    <label>Choose your date of birth: </label>
                    <NewDropDown/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Form;