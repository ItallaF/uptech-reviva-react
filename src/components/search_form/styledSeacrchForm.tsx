import styled from 'styled-components';


export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0rem;
    margin: 1% 0 0 4%;
    @media screen and (max-width: 576px) {
        gap: 0rem;
        float: right;
    }
`;

export const FormSearch = styled.input`
    border: 1px solid #353333;
    margin-right: 8px;
    width: 85vw;
    @media screen and (max-width: 576px){
        height: 8vh;
        width: 78vw;
        font-size: 1.1em;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        height: 8vh;
        width: 78vw;
    }
`;

export const FormButtonSearch = styled.button`
    border: 1px solid rgba(80, 79, 80, 0);
    border-radius: 1vh;
    background: #000;
    width: 7vw;
    
    svg {
        color: #FFF;
        bottom: -0.01%;    
        transform: matrix(-1, 0, 0, 1, 0, 0);
        top: 0%;
    }
    @media screen and (max-width: 576px){
        height: 8vh;
        width: 15vw;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
        height: 8vh;
        width: 13vw;
    }
`;