import React from 'react';
import UserCard from '../UserCard/UserCard.jsx';
import Face from "../../assets/img/faces/face-1.jpg";
import Background from '../../assets/img/sidebar-5.jpg';
import CustomButton from '../CustomButton/CustomButton.jsx';

function UserPage(props){
    const location = props.location.state;
    //console.log(props);
    //Usually if you don't pass anything props to a component, the default props of the component have history, location and match
    //This is react router 4 stuff

    return(
        <div>
            <UserCard
            name ={location.name}
            avatar ={Face}
            bgImage ={Background}
            description ={
                `Age : ${location.age}\nBirth: ${location.birth}\nAddress:${location.address}`
            }
            />
            <CustomButton onClick={()=>props.history.push('/admin/userslist')}>go back</CustomButton>
        </div>
    )
}

export default UserPage;