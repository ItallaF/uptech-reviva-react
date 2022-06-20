import { createGlobalStyle } from "styled-components";


export const GlobalStayle = createGlobalStyle`
    background-color: $colorBackground;
    font-family: $font;
    margin: 0%;
    padding: 0%;
    font-size: 62.5%;
    color: $colorText;
    * {
        box-sizing: border-box; 
    }
`;