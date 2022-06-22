import styled from 'styled-components';
import { font } from '../../ui/variables';


export const HeaderLogo = styled.div`
    align-items: end;
    display: grid;
`;

export const HeaderLogoTitle = styled.h1`
    font-family: ${font};
    font-size: 3rem;
    font-weight: 400;
    line-height: 73%;
    margin-block-end: 0%;
`;

export const HeaderLogoText = styled.p`
    font-family: ${font};
    font-style: normal;
    font-weight: 400;
    font-size: 7em;
    justify-self: end;
    margin-top: auto;
`;