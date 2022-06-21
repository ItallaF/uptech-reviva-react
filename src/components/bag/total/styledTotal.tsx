import styled from 'styled-components';
import { ProductListButtonBag } from '../../listProduct/styledListProduct';
import { colorBorder, colorText } from '../../ui/variables';


export const MyBagTotal = styled.div`
    background-color: ${colorBorder};
    width: 18vw;
    grid-column: 7/7;
    grid-row: span 3/span 1;
    margin-top: -279%;
    @media screen and (max-width: 576px){
        grid-column: 2/7;
        grid-row: 5;
        justify-content:center;
        margin: 0 0 0 6%;
        margin-top: 0%;
        width: 90%;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        margin-top: 0%;
        grid-column: 2/ 3;
        grid-row: 5;
        width: 60vw;
        
    }
`;

export const MyBagTotalFinal = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 2% 0 2%;
`;

export const MyBagTotalContent = styled.h4`
    color: ${colorText};
    font-style: normal;
    font-weight: bold;
    font-size: 2.3rem;
    line-height: 5vh;
`;

export const MyBagTotalButton = styled.div`
    margin-top: 50%;
    text-align: -webkit-center;
    @media screen and (max-width: 576px){
        text-align: -webkit-center;
    }
`;

export const MyBagTotalButtonPay = styled(ProductListButtonBag)`
    width: 90%;
`;