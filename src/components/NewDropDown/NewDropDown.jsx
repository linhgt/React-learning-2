import { ppid } from 'process';
import React from 'react';
import DropDownItem from '../DropDownItem/DropDownItem.jsx';

export default function NewDropDown(props){
    const listOfYears = [];

    for(let i = 1900; i <= 2030; i++)
    {
        listOfYears.push(<DropDownItem key={i} year={i}/>);
    }

    return(
        <datalist name="years" id ="birth-years" value={props.value} onChange={props.onChange}>
            {listOfYears}
        </datalist>
    );
};