import React from 'react';
import ReactDom from 'react-dom';
import '../Checklist/Checklist.css'
import { placeholder } from '@babel/types';
import ListItem from "../ListItem/ListItem"

function Checklist(props) {
    return (
        <div className="checklist">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
    )
}

export default Checklist; 