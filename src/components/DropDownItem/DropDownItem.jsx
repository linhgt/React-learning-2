import React, {Component} from 'react';

export default function DropDownItem(props){
    return (
        <option value={props.year}>{props.year}</option>
    );
};