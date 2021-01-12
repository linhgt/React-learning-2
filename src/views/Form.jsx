import React, {Component} from 'react';
import NewDropDown from 'components/NewDropDown/NewDropDown.jsx';
import "../assets/css/Form.css";

class Form extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            username:"",
            password:"",
            address:"",
            year:"",
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checked' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    /*handleUsernameChange = (event)=>{
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
    }; */

    handleYearChange = (event) =>{
        this.setState({
            year:event.target.value
        });
    };

    handleSubmit = (event) =>{
        console.log("the new username is: " + this.state.username + " and the new password is: "+ this.state.password);
        console.log("the address is: " + this.state.address + " and the birth year is: " + this.state.year);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} id="forms">
                <label>
                    Full Name:
                </label>
                <br/>
                <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}/>
                <br/>

                <label>
                    Alias:
                </label>
                <br/>
                <input type="text" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                <br/>

                <label>
                    Address:
                </label>
                <br/>
                <textarea rows="5" cols ="60" name="address" 
                    value={this.state.address} onChange={this.handleInputChange}>
                </textarea>
                <br/>
                
                <label>Choose your year of birth: </label>
                <input type="text" list="birth-years" id="years"/>
                <NewDropDown value={this.state.year} onChange={this.handleYearChange}/>
                <br/>

                <input id="submit-button" type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Form;