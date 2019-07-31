import React from 'react';
import ReactDom from 'react-dom';
import '../ListItem/ListItem.css'
import { rootCertificates } from "tls";
import styled from 'styled-components'

function ListItem(props){
    const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || "black"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
    `;
    const Parrafo = styled.p`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || "black"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
    `;

    return (
     <div>
        <React.Fragment>
            <parrafo>{props.text}</parrafo>
            <Input defaultValue="Ingrese Valor" type="text" inputColor="black" />
        </React.Fragment>
     </div>
    )
}



export default ListItem;