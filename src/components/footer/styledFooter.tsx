import styled from 'styled-components';
import { colorBackgroundDestaque, colorTextDestaque } from '../ui/variables';

export const FooterContentSection = styled.footer`
    background: ${colorBackgroundDestaque};
    margin-top: 5%;
    height: 44vh;
    width: 100%;
`;

export const FooterTitle = styled.h4`
    color: ${colorTextDestaque};
    font-weight: bold;
    font-size: 14.4em;
    line-height: 3.5rem;
    @media screen and (max-width: 576px){
        font-size: 1.2rem;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        font-size: 14.4em;
    }
`;
