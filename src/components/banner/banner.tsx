import style from './banner.module.scss';
import LogoBanner from './logo_banner';
import TextBanner from './text_banner';


export default function Banner(){
    return(
        <section className={style.banner}>
            <TextBanner />
            <LogoBanner />
        </section>
    )
}