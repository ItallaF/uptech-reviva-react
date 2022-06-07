import style from './banner.module.scss';


export default function Banner(){
    return(
        <section className={style.banner}>
            <div className={style.banner__conteudo}>
                <p className={style.banner__conteudo__texto}>Fique por dentro de tudo que há de novidade da moda!</p>
                <h3 className={style.banner__conteudo__titulo}>Baixe já nosso manual de moda!</h3>
            </div>
            <div className={style.banner__logo}>
                <h1 className={style.logo__titulo}>Reviva Fashion</h1>
                <p className={style.logo__texto}>by RCHLO</p>
            </div>
        </section>
    )
}