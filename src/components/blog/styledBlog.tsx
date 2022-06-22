import styled from 'styled-components';
import { colorText } from '../ui/variables';

export const BlogSection = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    height: 100%;
    margin: 0 0 0 4%;
    margin-top: 2%;
    @media screen and (max-width: 576px){
        grid-template-columns: 1fr;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

export const BlogTitle = styled.div`
    color: ${colorText};
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    width: 83%;
    @media screen and (max-width: 576px){
        font-size: 1.8rem;
        width: 90%;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        width: 90%;
    }
`;

export const BlogImageMain = styled.figure`
    margin: 0%;
    @media screen and (max-width: 576px){
        text-align: center;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        text-align: center;
    }
`;

export const BlogImageMainSize = styled.img`
    height: 63vh;
    width: 37vw;
    @media screen and (max-width: 576px){
        width: 82vw;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        height: 72vh;
        width: 82vw;
    }
`;

export const BlogImageMainText = styled.p`
    color: ${colorText};
    font-weight: 400;
    font-size: 1.9rem;
    width: 80%;
    @media screen and (max-width: 576px){
        margin: 0 0 0 0%;
        line-height: 135%;
        width: 98%;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        margin: 0 0 0 7%;
        line-height: 135%;
    }
`;

export const BlogContent = styled.div`
    margin-top: 12%;
    width: 100%;
`;

export const BlogSide = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    @media screen and (max-width: 576px){
        grid-template-columns: 1fr;
    }
`;

export const BologImageSide = styled.figure`
    margin: 0%;
    width: 78%;
`;

export const BologImageSideSize = styled.img`
    height: 40vh;
    width: 20vw;
    @media screen and (max-width: 576px){
        height: 57vh;
        margin: 0 0 0 6%;
        width: 82vw;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        height: 52vh;
        width: 45vw;
    }
`;

export const BologImageSideText = styled.p`
    color: ${colorText};
    font-size: 1.9rem;
    margin: 0%;  
    @media screen and (max-width: 576px){
        margin-top: 2%;
    }
`;

export const BlogTertiary = styled(BlogSide)`
    margin-top: 4%;
`;