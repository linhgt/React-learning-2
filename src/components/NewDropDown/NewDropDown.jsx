import { ppid } from 'process';
import React from 'react';
import DropDownItem from '../DropDownItem/DropDownItem.jsx';

export default function NewDropDown(props){
    const listOfYears = [];

    listOfYears.push(<option value="none" selected disabled hidden>Select an option</option>)

    for(let i = 1900; i <= 2030; i++)
    {
        listOfYears.push(<DropDownItem key={i} year={i}/>);
    }

    return(
        <select name="years" id ="birth-years" value={props.value} onChange={props.onChange}>
            {listOfYears}
        </select>
    );
};