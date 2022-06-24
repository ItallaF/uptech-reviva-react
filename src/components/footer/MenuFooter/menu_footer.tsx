import { FooterTitle } from '../styledFooter';
import { FooterItensMenu, FooterItensMenuLink } from './styledMenuFooter';


export default function MenuFooter() {
    const linksFooter = [
        <>
            <FooterItensMenu>
                <FooterItensMenuLink href="/">Página Inicial</FooterItensMenuLink>
            </FooterItensMenu>
            <FooterItensMenu>
                <FooterItensMenuLink href="#">Moda Masculina</FooterItensMenuLink>
            </FooterItensMenu>
            <FooterItensMenu>
                <FooterItensMenuLink href="#">Moda Feminina</FooterItensMenuLink>
            </FooterItensMenu>
            <FooterItensMenu>
                <FooterItensMenuLink href="#">Moda Infantil</FooterItensMenuLink>
            </FooterItensMenu>
            <FooterItensMenu>
                <FooterItensMenuLink href="#">Moda Manual da Moda</FooterItensMenuLink>
            </FooterItensMenu>
        </>
    ]
    return (
        <section>
            <FooterTitle>Menu</FooterTitle>
            <nav>
                <ul>{linksFooter}</ul>
            </nav>
        </section>
    );
}