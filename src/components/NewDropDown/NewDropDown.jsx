import React from 'react';
import DropDownItem from '../DropDownItem/DropDownItem.jsx';

export default function NewDropDown(props){
    const listOfYears = [];

    for(let i = 1900; i <= 2030; i++)
    {
        listOfYears.push(<DropDownItem year={i}/>);
    }

    return(
        <select name="years" id ="birth-years">
            {listOfYears}
        </select>
    );
};