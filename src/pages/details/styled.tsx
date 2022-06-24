import styled from 'styled-components';

const DetailsProduct = styled.section`
display: grid;
grid-template-columns: repeat(2, 1fr);

margin: 2% 4%;
width: 90%;
@media screen and (max-width: 576px){
    grid-template-columns: 1fr;
}
@media screen and (min-width: 577px) and (max-width: 768px){
    grid-template-columns: 1fr;
}  
`;

export default DetailsProduct;