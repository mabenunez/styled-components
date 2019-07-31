import styled from 'styled-components';

const Parrafo = styled.p`
color: ${props => props.inputColor || "black"};
margin:0;
font-family: 'Arial';
padding:0;
`;

export default Parrafo;