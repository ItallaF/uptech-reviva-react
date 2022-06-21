import styled from 'styled-components';
import { colorBackgroundButton, colorBorder, colorText, colorTextDestaque, font } from '../../ui/variables';

export const DetailsProducContent = styled.div`
    width: 100%;
`;

export const DetailsProducContentTitle = styled.h3`
    color: ${colorText};
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
`;

export const ProductDescription = styled.p`
    color: ${colorText};
    font-style: ${font};
    font-weight: 400;
    font-size: 2em;
    line-height: 160%;
`;

export const ProductDescriptionImage = styled.div`
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5% 0 0 0;
    width: 100%;
`;

export const ProductImageEdge = styled.figure`
    border: 1px solid ${colorBorder};
    height: 25vh;
    padding: 1%;
    width: 10vw;
    margin: 0%;
    @media screen and (max-width: 576px){
        height: 37vh;
        width: 43vw;
        margin: .2%;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        height: 28vh;
        width: 21vw;
        margin: .2%;
    } 
`;

export const ProductImageDescription = styled.img`
    height: 100%;
`;

export const ButtonImage = styled.div`
    align-items: flex-start;
    display: flex;        
    margin: 10% 0 0 0;
    color: $color_text;
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
`;

export const ImageButtonSize = styled.label`
    border: 1px solid ${colorBorder};
    border-radius: 15%;
    height: 5vh;
    grid-column: 1;
    margin:  1%;
    width: 2.3vw;
    @media screen and (max-width: 576px){
        height: 5vh;
        width: 5vw;
    }
        
    @media screen and (min-width: 577px) and (max-width: 768px){
        height: 5vh;
        width: 5vw;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        width: 3.3vw;
    }
}
`;

export const ButtonBag = styled.div`
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
`;

export const ButtonBuy = styled.button`
    background: ${colorBackgroundButton};
    border-radius: 1vh;
    border: 1px solid ${colorBorder};
    color: ${colorTextDestaque};
    display: grid;
    font-weight: bold;
    font-size: 1.7rem;
    height: 9vh;
    line-height: 9vh;
    width: 50%;
    @media screen and (min-width: 769px) and (max-width: 992px){
        width: 24vw;
    }
`;

export const ButtonSvg = styled.div`
    place-self: end;
    margin-top: 3%;
    min-block-size: fit-content;
`;