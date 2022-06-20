import styled from 'styled-components';
import { colorBackgroundDestaque } from '../../ui/variables';


export const BannerSection = styled.section`
    background: ${colorBackgroundDestaque};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 31%;
    height: 10vw;
    margin: 1% 0 0 4%;
    width: 90%;
    @media screen and (max-width: 576px){
        height: 26vh;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        height: 26vh;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
        height: 26vh;
    }
`;