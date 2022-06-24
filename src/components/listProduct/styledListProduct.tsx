import styled from 'styled-components';
import { colorBackgroundButton, colorBorder, colorPreco, colorText, colorTextDestaque, font } from '../ui/variables';


export const ProductListTitle =styled.h4`
    color: ${colorText};
    font-family: ${font};
    font-style: normal;
    font-size: 2.1rem;
    font-weight: bold;
    line-height: 2%;
    margin: 4%;
    @media screen and (max-width: 576px){
        font-size: 1.8rem;
        text-align: center;
        line-height: 8vh;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        line-height: 6vh;
    }
`;

export const ProductListSection = styled.section`
    margin: 0 0 0 4%;
    display: grid;
    gap: 2em;
    grid-template-columns: repeat(4, 1fr);
    max-width: 95%;
    @media screen and (max-width: 576px){
        grid-template-columns: 1fr;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        gap: 5em;
    }
`;

export const ProductListContent = styled.div`
    max-width: 95%;
    @media screen and (max-width: 576px){
        text-align: center;
        justify-self: center;
       
    }
`;

export const ProductListImageBorder = styled.figure`
    display: grid;
    height: 56vh;
    margin: 0%;
    width: 17vw;
    @media screen and (max-width: 576px){
        height: 50vh;
        margin: 0%;
        width: 40vw;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        height: 50vh;
        width: 30vw;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        height: 43vh;
        width: 20vw;
    }
`;

export const ProductListImageSize = styled.img`
    height: 45vh;
    margin: 2%;
    width: 16vw;
    @media screen and (max-width: 576px){
        height: 42vh;
        margin: 2%;
        width: 38vw;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        height: 42vh;
        margin: 2%;
        width: 28vw;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        height: 36vh;
        margin: 2%;
        width: 19vw;
    }
`;

export const ProductListImageButton = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

export const ProductListImageButtonSize = styled.label`
    border: 1px solid ${colorBorder};
    border-radius: 15%;
    grid-column: 1;
    height: 4vh;
    font-size: 2rem;
    text-align: center;
    width: 2vw;
    @media screen and (max-width: 576px){
        height: 4vh;
        width: 5vw;
        font-size: 2rem;
        text-align: center;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        height: 4vh;
        width: 4vw;
        font-size: 2rem;
        text-align: center;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        height: 4vh;
        width: 3vw;
        font-size: 2rem;
        text-align: center;
    }
`;

export const ProductListImageButtonSizeInput = styled.input`
    appearance: none;
`;

export const ProductListText = styled.div`
    font-weight: 400;
    font-size: 2.9rem;
    height: 12vh;
    text-align: start;
    width: 100%;
    @media screen and (max-width: 576px){
        width: 50vw;
        height: 12vh;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        height: 0vh;
        width: 34vw;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        height: 17vh;
    }
`;

export const ProductListPrice = styled.div`
    color: ${colorPreco};
    font-weight: bold;
    font-size: 4rem;
    height: 7vh;
    text-align: start;
    width: 100%;
    
    @media screen and (min-width: 577px) and (max-width: 768px){
        margin-top: 40%;
    }
    
`;

export const ProductListButton = styled.div`
    align-items: center;
`;

export const ProductListButtonBag = styled.button`
    align-items: center;
    background: ${colorBackgroundButton};
    border-radius: 1vh;
    border: 1px solid ${colorBorder};


    color: ${colorTextDestaque};
    display: grid; 
    font-weight: bold;
    font-size: 1.7rem;
    height: 3vw;
    line-height: 6vh;
    width: 17vw;
    @media screen and (max-width: 576px){
        height: 8vh;
        line-height: 8vh;
        width: 40vw;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        height: 8vh;
        line-height: 8vh;
        width: 30vw;

    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        height: 8vh;
        line-height: 8vh;
        font-size: 1.3rem;
    }
    
`;

export const ProductListButtonSvg = styled.div`
    place-self: end;
    margin-top: 3%;
    min-block-size: fit-content;
    padding: 1%;
`;