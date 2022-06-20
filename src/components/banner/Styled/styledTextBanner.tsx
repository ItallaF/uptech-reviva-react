import styled from 'styled-components';
import { colorTextDestaque } from '../../ui/variables';

export const BannerContent = styled.div`
    grid-column: 1 / -1;
    height: 26vh;
`;

export const BannerContentText = styled.p`
    color: ${colorTextDestaque};
    font-weight: 400;
    font-size: 2rem;
    text-align: center;
    line-height: 3em;
    @media screen and (max-width: 576px){
        font-size: 2em;
        line-height: 7em;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        font-size: 2.5em;
        line-height: 4em;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        font-size: 2.5em;
        line-height: 4em;
    }
`;

export const BannerContentTitle = styled.h3`
    font-size: 2.5rem;
    line-height: 0vh;
    margin-top: -4vh;
    text-align: center;
    color: ${colorTextDestaque};
    font-weight: 400;
    @media screen and (max-width: 576px){
        font-size: 2.2rem;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        font-size: 2.2rem;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        font-size: 2.5rem;
    }
`;