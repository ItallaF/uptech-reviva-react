import styled from 'styled-components';
import { colorTextDestaque, font } from '../../ui/variables';


export const FooterLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-content: stretch;
    align-items: flex-end;
`;

export const FooterLogoTitle = styled.h1`
color: ${colorTextDestaque};
    font-family: Helvetica, sans-serif;
    font-size: 3rem;
    font-weight: 400;
    line-height: 7vh;
    margin: 0 0 0 4%;
    @media screen and (max-width: 576px){
        font-size: 2rem;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        font-size: 2.3rem;
    }
`;

export const FooterLogoText = styled.p`
color: ${colorTextDestaque};
    font-family: ${font};
    font-style: normal;
    font-weight: 400;
    font-size: 7em;
    line-height: 0vh;
    place-items: flex-end;
    margin-top: 0%;
        
    @media screen and (max-width: 576px){
        font-size: 7em;
        grid-template-columns: repeat(4, 1fr);
        line-height: 0vh;
        place-items: flex-end;    
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        font-size: 7em;
        grid-template-columns: repeat(4, 1fr);
        line-height: 0vh;
        place-items: flex-end;
    }
`;