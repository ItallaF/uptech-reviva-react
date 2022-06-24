import styled from 'styled-components';
import { colorText } from '../../ui/variables';

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

export const MyBagProductDescription = styled.p`
    color: ${colorText};
    font-weight: 400;
    font-size: 2.1em;
    line-height: 3vh;

    @media screen and (max-width: 576px){
        font-size: 2.5em;
        text-align: start;
        line-height: 5vh;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        line-height: 3vh;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        font-size: 2.5em;
        line-height: 5vh;
    }
`;