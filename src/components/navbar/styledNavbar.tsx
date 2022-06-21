import styled from 'styled-components';
import { colorBackgroundDestaque, colorTextDestaque } from '../ui/variables';

export const Menu = styled.section`
    background-color: ${colorBackgroundDestaque};
    height: 10vh;
    left: 0px;
    width: 100%;
`;

export const MenuList = styled.nav`
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: 576px){
        right: 0;
        width: 50vw;
        background: ${colorBackgroundDestaque};
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        transform: translateX(100%);
        transition: transform 0.3s ease-in;
        margin: 0;
        height: 0;
        padding: 0;
        :hover {
            height: 80vh;
        }
    }
`;

export const MenuButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${colorTextDestaque};
    font-size: 7em;
    max-block-size: -webkit-fill-available;
    place-content: flex-end;
    display: none;
    :hover {
        cursor: pointer;
        opacity: 0.8;
        background-color: ${colorTextDestaque};
        height: 0;
    }
    :focus~.menu__link {
        height: 260px;
    }
    @media screen and (max-width: 576px){
        display: flex;
    }
`;

export const MenuLink = styled.a`
    color: ${colorTextDestaque};
    font-weight: 400;
    font-size: 2.8em;
    line-height: 10vh;
    list-style-type: none;        
    justify-content: space-between;
    overflow: hidden;
    text-decoration: none;
    top: 4vh;
    @media screen and (max-width: 576px) {
        transition:all .4s;
        text-align: center;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        font-size: 2.2em;
        font-weight: 100;
    }
`;