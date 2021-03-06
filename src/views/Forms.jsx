import React, {Component} from 'react';
import NewDropDown from 'components/NewDropDown/NewDropDown.jsx';
import "../assets/css/Forms.css";
import {Form, FormGroup, Label, Input, CustomInput, FormText} from 'reactstrap';

class Forms extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            username:"",
            password:"",
            address:"",
            year:"",
            gender:"",
            age:"",
            file:"",
            personality:[
                {id:1, value:"Independence"},
                {id:2, value:"Teamwork"},
                {id:3, value:"Extremely proud"},
                {id:4, value:"Goofy"}
            ],
            checkedItems:new Map()
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleCheckBoxes = (event) => {
        let isChecked = event.target.checked;
        let value = event.target.value;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(value, isChecked) }));
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
        console.log("the gender is: " + this.state.gender);
        console.log("The personality is: ");
        for(let i = 0; i < this.state.personality.length; i++)
        {
            let checkedItems = this.state.checkedItems;
            let personalityId = this.state.personality[i].id.toString();
            if(checkedItems.get(personalityId))
            {
                console.log(this.state.personality[i].value);
            }
        }
        console.log("The gender is: " + this.state.gender);
        console.log("The age is: " + this.state.age);
        console.log("The file chosen is: " + this.state.file);
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
                <textarea rows="5" cols ="50" name="address" 
                    value={this.state.address} onChange={this.handleInputChange}>
                </textarea>
                <br/>
                <br/>

                <div>
                    <FormGroup id="checkboxes">
                        <Label for="exampleCheckbox">What kinds of personality do you have</Label>
                        {
                            this.state.personality.map(item =>(
                                <CustomInput 
                                    type="checkbox" 
                                    value={item.id} 
                                    key={item.id}
                                    id={`checkbox-${item.id}`}
                                    label={item.value} 
                                    onChange={this.handleCheckBoxes}/>
                            ))
                        }
                    </FormGroup>
                </div>

                <div>
                    <FormGroup >
                        <Label>What is your gender:</Label>
                        <div id="radios">
                            <CustomInput type="radio" id="male" value="male" onChange={this.handleInputChange} name="gender" label="Male"/>
                            <CustomInput type="radio" id="female" value="female" onChange={this.handleInputChange} name="gender" label="Female"/>
                        </div>
                    </FormGroup>
                </div>
                
                <label>Choose your year of birth: </label>
                <input type="text" list="birth-years" id="years" onChange={this.handleYearChange}/>
                <NewDropDown value={this.state.year}/>
                <br/>

                <div>
                    <FormGroup>
                        <Label for="Age">Age</Label>
                        <Input type="range" name="age" id="Age" min="20" max="30" onChange = {this.handleInputChange}/>
                    </FormGroup>
                </div>

                <FormGroup>
                    <Label for="File">File</Label>
                    <Input type="file" name="file" id="File" onChange={this.handleInputChange}/>
                    <FormText color="muted">
                        Choose A file
                    </FormText>
                </FormGroup>

                <input id="submit-button" type="submit" value="Submit"/>
            </form>
        );
    }
}

/*<label>What is your gender:</label>
                <br/>
                <div id="checkboxes">
                    <input type="checkbox" name = "male" value="male"/>
                    <label htmlFor="male">Male</label>
                    <input type="checkbox" name = "female" value="female"/>
                    <label htmlFor="female">Female</label>
                </div>
                <br/>*/

export default Forms;