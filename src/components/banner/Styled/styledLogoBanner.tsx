import styled from 'styled-components';
import { colorTextDestaque, font } from '../../ui/variables';


export const BannerLogo = styled.div`
    grid-column: 2 / span 2;
    margin-top: 1rem;
    @media screen and (max-width: 576px){
        margin-top: 4rem;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        margin-top: 3rem;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        margin-top: 3rem;
    }
`;

export const LogoTitle = styled.h1`
    color: ${colorTextDestaque};
    font-family: ${font};
    font-size: 3rem;
    font-weight: 400;
    line-height: 75%;
    margin-block-end: 0%;
    text-align: end;
    line-height: 1vh;
        
    @media screen and (max-width: 576px){
        font-size: 2.2rem;
        line-height: 4vh;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        font-size: 2.2rem;
        line-height: 3vh;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        font-size: 2.5rem;
        line-height: 4vh;
    }
`;

export const LogoText = styled.p`
    color: ${colorTextDestaque};
    font-family: $font;
    font-style: normal;
    font-weight: 400;
    font-size: 2em;
    text-align: end;
    margin-top: 1%;
`;