import styled from 'styled-components';
import { colorPreco, colorText } from '../../ui/variables';


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

export const MyBagProductPrice = styled.p`
    color: ${colorPreco};
    font-weight: bold;
    font-size: 3em;
    line-height: 0%;
    text-align: start;
    width: 100%;
    @media screen and (max-width: 576px){
        text-align:center;
        font-size: 3.2em;
    }
`;