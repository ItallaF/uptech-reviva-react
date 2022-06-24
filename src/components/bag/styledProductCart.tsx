import styled from 'styled-components';
import { colorBorder, colorPreco, colorText } from '../ui/variables';


export const ProductMyBag = styled.section`
    display: grid;
    gap: 7em;
    grid-template-columns: 16% 18% 14% 13% 7% 11%;
    margin: 2% 4%;
    text-align: center;
    width: 90%;
    @media screen and (max-width: 576px){
        grid-template-columns: 1fr;
        text-align: center;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        grid-template-columns: repeat(3, 1fr);
        text-align: center;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        grid-template-columns: 22% 26% 22%;
        text-align: center;
    }
`;

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

export const MyBagProductTitle = styled.h3`
    color: ${colorText};
    font-style: normal;
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 5vh;
    @media screen and (max-width: 576px){
        text-align: center;
    }
`;

export const MyBagProductDescription = styled.p`
    color: ${colorText};
    font-weight: 400;
    font-size: 1rem;
    line-height: 5vh;
    text-align: initial;

    @media screen and (max-width: 576px){
        font-size: 1rem;
        line-height: 5vh;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        line-height: 3vh;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        line-height: 5vh;
    }
`;

export const MyBagButtonSize = styled.label`
    border: 1px solid ${colorBorder};
    border-radius: 15%;
    grid-column: 1;
    height: 4vh;
    font-size: 1.8rem;
    text-align: center;
    width: 2vw;
    @media screen and (max-width: 576px){
        height: 4vh;
        width: 5vw;
        font-size: 1.8rem;
        text-align: center;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        height: 4vh;
        width: 4vw;
        font-size: 1.8rem;
        text-align: center;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        height: 4vh;
        width: 3vw;
        font-size: 1.8rem;
        text-align: center;
    }
`;

export const MyBagButtonSizeInput = styled.input`
    appearance: none;
    height: 4vh;
    width: 1vw;
    text-align: center;
`;

export const MyBagProductSize = styled.div`
    border: 1px solid ${colorBorder};
    border-radius: 15%;
    grid-column: 1;
    height: 4vh;
    font-size: 3em;
    text-align: center;
    width: 2vw;
    @media screen and (max-width: 576px){
        height: 4vh;
        width: 5vw;
        font-size: 3em;
        text-align: center;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        height: 4vh;
        width: 4vw;
        font-size: 3em;
        text-align: center;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        height: 4vh;
        width: 3vw;
        font-size: 3em;
        text-align: center;
    }
`;

export const MyBagProductPrice = styled.p`
    color: ${colorPreco};
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 5vh;
    text-align: start;
    width: 100%;
    @media screen and (max-width: 576px){
        text-align:center;
        font-size: 1.5rem;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        text-align: center;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        text-align: center;
    }    
`;

export const MyBagButtonQuanty = styled.div`
    align-self: center;
    display: flex;
    font-size: large;
    gap: 1em;
    
    height: 0%;
    line-height: 0%;
    @media screen and (max-width: 576px){
        justify-content:center;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        text-align: center;
    }
`;

export const MyBagQuantityProductValue = styled.input`
    align-self: center;
    color: ${colorPreco};
    font-weight: bold;
    font-size: large;
    width: 6vw;
    line-height: 5vh;
    
    @media screen and (max-width: 576px){
        text-align:center;
        font-size: 1.5rem;
        width: 10vw;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        text-align: center;
        width: 10vw;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        text-align: center;
        width: 10vw;
    }
`;

export const MyBag2 = styled.div`
    display: grid;
    gap: 116em;
    grid-column: 1 / 7;
    margin-top: 23%;
    justify-content: space-around;
    @media screen and (max-width: 576px){
        grid-template-columns: none;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        grid-template-columns: repeat(3, 1fr);
    }
     
`;
