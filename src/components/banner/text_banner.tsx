import style from './banner.module.scss';

export default function TextBanner(){
    return(
        <div className={style.banner__conteudo}>
                <p className={style.banner__conteudo__texto}>Fique por dentro de tudo que há de novidade da moda!</p>
                <h3 className={style.banner__conteudo__titulo}>Baixe já nosso manual de moda!</h3>
        </div>
    );
}