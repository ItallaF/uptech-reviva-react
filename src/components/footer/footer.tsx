import ContentFooter from './content_footer';
import style from './footer.module.scss';
import LogoFooter from './logo_footer';



export default function Footer(){
    return(
        <footer className={style.rodape}>
        <LogoFooter />
        <ContentFooter />
        </footer>
    );
}