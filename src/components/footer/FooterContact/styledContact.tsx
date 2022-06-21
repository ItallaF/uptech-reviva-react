import styled from 'styled-components';

export const FooterContent = styled.p`
color: #FFF;
font-weight: normal;
font-size: 1.8em;
line-height: 197%;
svg{
    height: 15%;
    margin-left: 7%;
    width: 15%;
}
@media screen and (max-width: 576px){
    font-size: 1.5em;
}
@media screen and (min-width: 577px) and (max-width: 768px){
    font-size: 1.8em;
}
`;

export const FooterContentSvg = styled.svg`
    height: 15%;
    margin-left: 7%;
    width: 15%;
    @media screen and (max-width: 576px){
        font-size: 1.5em;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        font-size: 1.8em;
    }
`;