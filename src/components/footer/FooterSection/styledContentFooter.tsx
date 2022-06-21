import styled from 'styled-components';
import { colorTextDestaque } from '../../ui/variables';

export const Footersection = styled.section`
align-items: flex-start;
display: flex;
justify-content: space-between;
margin: 0 4% 0 4%;
max-width: 100%;
@media screen and (max-width: 576px){
    max-width: 100%;
}
@media screen and (min-width: 577px) and (max-width: 768px){
    max-width: 100%;
}
`;

export const FootersectionP = styled.p`
color: ${colorTextDestaque};
`;

export const FootersectionLink = styled.a`
color: ${colorTextDestaque};
`;