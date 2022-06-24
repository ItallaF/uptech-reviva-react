import ContentFooter from './FooterLogo/logo_footer';
import LogoFooter from './FooterSection/content_footer';
import { FooterContentSection } from './styledFooter';


export default function Footer() {
    return (
        <FooterContentSection>
            <LogoFooter />
            <ContentFooter />
        </FooterContentSection>
    );
}