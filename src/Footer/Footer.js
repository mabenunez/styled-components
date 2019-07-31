import React from 'react';
import styled from 'styled-components';

const  Footer =  () => {
    
        const HeroWrapper = styled.div ` 
            background: #ccccff;
        `;

        const Equipo = styled.h1 `
            font-size: 25px;
            font-family: verdana, sans-serif;
            font-weight: 900;
            text-align: left;
            padding-left: 30px;
        `;

        const Integrantes = styled.h2 `
            font-size: 15px;
            text-align: left;
            padding-left: 35px;
        `;

        const Contacto = styled.p `
            color: violet;
            font-size: 25px;
            font-family: verdana, sans-serif;
            font-weight: 900;
            padding-left: 30px;
            
        `;
    
    return (
    <HeroWrapper>
        <div class="container">
            <row class="col-6"> 
                <Equipo>Equipo:</Equipo>
                <Integrantes>Mabe <br/> Fer <br/> Mart Comito <br/> Tomi D <br/> irisS</Integrantes>
            </row> 
            <row class="col-6">
                <Contacto>Contacto</Contacto>
                <a href="https://www.facebook.com/groups/developargentina/">Programadores de Argentina</a>
            </row>
        </div>
    </HeroWrapper>
    )
}

export default Footer;