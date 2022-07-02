import styled from 'styled-components';
import { colorBorder, colorTextDestaque } from '../../variables';

export const FooterNewsletter = styled.section`
	width: 25%;
	@media screen and (max-width: 576px){
		width: 20%;
		margin-left: 1%;
	}
	@media screen and (min-width: 577px) and (max-width: 768px){
		width: 20%;
		margin-left: 1%;
	}
`;

export const FooterNewsletterText = styled.input`
	background: ${colorTextDestaque};
	border: 1px solid ${colorBorder};
	box-sizing: border-box;
	font-size: 1rem;
	height: 3.5vh;
	width: 50%;
	@media screen and (max-width: 576px){
		width: 90%;
		margin: 0 0 0 1%;
	}
	@media screen and (min-width: 577px) and (max-width: 768px){
		width: 70%;
	}
`;

export const FooterNewsletterButton = styled.button`
	background: ${colorBorder};
	height: 4vh;
	width: 6vw;
	font-size: 1rem;
	@media screen and (max-width: 576px){
		height: 6vh;
		width: 95%;
	}
	@media screen and (min-width: 577px) and (max-width: 768px){
		width: 70%;
	}
`;