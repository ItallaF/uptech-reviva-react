import styled from 'styled-components';
import { colorText } from '../../ui/variables';


export const MyBagQuantityProductValue = styled.input`
    align-self: center;
    color: $colorPreco;
    font-weight: bold;
    font-size: large;
    
    @media screen and (max-width: 576px){
        text-align:center;
        font-size: 3.2em;
    }
`;

export const MyBagProductTitle = styled.h3`
    color: ${colorText};
    font-style: normal;
    font-weight: bold;
    font-size: 2.3em;
    line-height: 5vh;
    @media screen and (max-width: 576px){
        font-size: 2.8em;
        text-align: center;
    }
`;
