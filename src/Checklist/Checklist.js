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
    margin: 1.5rem 1rem;
    width: 8rem;
    color: white;
    background: transparent;
    `

    const DangerButton = styled(Button)`
        background-color: #bd4d58;
    `;
    const SubmitButton = styled(Button)`
        background-color: #5fba7d;
    `;

    const Wrapper = styled.section`
    border: 2px solid #ba4b4b;
    width: 50%;
    margin: auto;
    padding: 22px;
    border-radius: 20px;
    `;
    return (
        <Wrapper>
            <ListItem text="Nombre" inputColor="gray"/>
            <ListItem text="Apellido"/>
            <ListItem text="Dni" inputColor="blue"/>
            <DangerButton
            href="https://github.com/styled-components/styled-components"
            target="_blank"
            rel="noopener"
            primary
            >
            Cancelar
            </DangerButton>
            <SubmitButton
            href="https://github.com/styled-components/styled-components"
            target="_blank"
            rel="noopener"
            primary
            >
            Cargar Persona
            </SubmitButton>
        </Wrapper>
    )
}

export default Checklist; 