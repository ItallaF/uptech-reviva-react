import { createGlobalStyle } from 'styled-components';
import { colorBackground, colorText, font } from './components/ui/variables';


const GlobalStyle = createGlobalStyle`
    *{
        background-color: #ffffff;
        font-family: "Helvetica", sans-serif;
        margin: 0%;
        padding: 0%;
        font-size: 62.5%;
        color: #000000;
        * {
        box-sizing: border-box; 
    }
    }
    
`;
export default GlobalStyle;