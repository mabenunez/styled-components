import React from 'react';
import ReactDom from 'react-dom';
import '../Checklist/Checklist.css'
import { placeholder } from '@babel/types';
import ListItem from "../ListItem/ListItem"
import styled from 'styled-components'

function Checklist(props) {
    const Button = styled.a`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: black;
    border: 2px solid black;
    `
    const Wrapper = styled.section`
    border: 2px solid #ba4b4b;
    width: 50%;
    margin: auto;
    padding: 22px;
    border-radius: 20px;
    `;
    return (
        <Wrapper>
            <ListItem text="Nombre"/>
            <ListItem text="Apellido"/>
            <ListItem text="Dni"/>
            <Button
            href="https://github.com/styled-components/styled-components"
            target="_blank"
            rel="noopener"
            primary
            >
            Cargar Persona
            </Button>
        </Wrapper>
    )
}

export default Checklist; 