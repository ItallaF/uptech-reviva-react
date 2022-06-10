import Contact from './contact';
import style from './footer.module.scss';
import MenuFooter from './menu_footer';
import MediaSocial from './social_media';
import Subscription from './subscription';


export default function ContentFooter(){
    return(
        <section className={style.conteudo__rodape}>  
        <MenuFooter />
        <MediaSocial />
        <Contact />
        <Subscription />
        </section>
    );
}