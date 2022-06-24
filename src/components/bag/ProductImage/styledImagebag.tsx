import styled from 'styled-components';


export const MyBagImage = styled.figure`
    height: 33vh;
    margin: 0%;
    width: 12vw;
    @media screen and (max-width: 576px){
        height: 50vh;
        margin: 0 20% 0 22%;
        width: 51vw;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        height: 31vh;
        width: 22vw;
    }
`;


export const MyBagImageProduct = styled.img`
    height: 95%;
    margin: 2%;
    width: 95%;
`;