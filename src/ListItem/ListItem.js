import React from 'react';
import ReactDom from 'react-dom';
import '../ListItem/ListItem.css'
import { rootCertificates } from "tls";
import styled from 'styled-components'
import Parrafo from '../shared-styles'

function ListItem(props){
    const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props.inputColor ? props.inputColor : "black"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
    `;
    return (
     <div>
        <React.Fragment>
            <Parrafo>{props.text}</Parrafo>
            <Input defaultValue="Ingrese Valor" type="text" inputColor="black" />
        </React.Fragment>
     </div>
    )
}



export default ListItem;