import styled from 'styled-components';
import { colorTextDestaque } from '../../ui/variables';

export const FooterItensMenu = styled.li`
    font-weight: normal;
    font-size: 1.6em;
    line-height: 197%;
    list-style-type: none;
`;

export const FooterItensMenuLink = styled.a`
    color: #FFF;
        text-decoration: none;
    }
    @media screen and (max-width: 576px){
        font-size: 1em;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        font-size: 1.5em;
    }
`;

export const FooterMenu = styled.div`
    color: ${colorTextDestaque};
    font-weight: bold;
    font-size: 2.4em;
    line-height: 1.5rem;
    @media screen and (max-width: 576px){
        font-size: 2.2em;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        font-size: 2.2em;
    }
`; 