import styled from 'styled-components';

export const FooterLinkSosicalMedia = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    @media screen and (max-width: 576px){
        grid-template-columns: repeat(2, 1fr);
        text-align: right;
        max-width: 50%;
        margin: 5%;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        justify-items: start;
        margin: 0%;
    }
`;