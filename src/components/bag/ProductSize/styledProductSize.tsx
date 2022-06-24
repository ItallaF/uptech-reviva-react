import styled from 'styled-components';
import { colorBorder, colorText } from '../../ui/variables';

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

export const MyBagButtonSize = styled.label`
    border: 1px solid ${colorBorder};
    border-radius: 15%;
    grid-column: 1;
    height: 4vh;
    font-size: 3em;
    text-align: center;
    width: 2vw;
    @media screen and (max-width: 576px){
        height: 4vh;
        width: 5vw;
        font-size: 3em;
        text-align: center;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        height: 4vh;
        width: 4vw;
        font-size: 3em;
        text-align: center;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        height: 4vh;
        width: 3vw;
        font-size: 3em;
        text-align: center;
    }
`;

export const MyBagButtonSizeInput = styled.input`
    appearance: none;
`;