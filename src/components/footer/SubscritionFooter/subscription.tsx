import { FooterTitle } from '../styledFooter';
import { FooterNewsletter, FooterNewsletterButton, FooterNewsletterText } from './styledSubscriptionFooter';


export default function Subscription(){
    return(
        <FooterNewsletter>
            <FooterTitle>Assine nossa newsletter</FooterTitle>
            <FooterNewsletterText type="text" placeholder="Assine o newsletter" name="assine" />
            <FooterNewsletterButton>Assine Já</FooterNewsletterButton>
        </FooterNewsletter>
    );
}