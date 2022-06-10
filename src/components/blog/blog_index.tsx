import style from './blog_index.module.scss';


export default function Blog(){
    return(
        <section className={style.blog}>
            <div className={style.blog__principal}>
            <h3 className={style.blog__titulo}>Na dúvida sobre combinar suas roupas e ficar incrível?
                Confira nossas dicas em nosso blog.</h3>
            <figure className={style.blog__imagem__principal}>
                <img className={style.blog__imagem__principal__tamanho} src={process.env.PUBLIC_URL + 'images/blog/ImageBlogPrincipal.jpg'} alt="mulher de vestido longo animal print onça" />
            </figure>
            <p className={style.blog__texto__principal}>O que fazer com o look que usou no carnaval? Confira
                já como fazer uso dessas mesmas peças no inverso e
                continuar na moda!</p>
        </div>
        <div className={style.blog__conteudo}>
            <div className={style.blog__secundario}>
                <figure className={style.blog__imagem__secundaria}>
                    <img className={style.blog__imagem__secundaria__tamanho} src={process.env.PUBLIC_URL + 'images/blog/ImagemBlogSecundaria.jpg'} alt="Mãe com macacão curto manga longa e filha vestida com vestido preto estampado estrelas coloridas" />
                </figure>
                <div className={style.blog__texto}>
                    <p className={style.blog__texto__secudario}>O que fazer com o look que usou no carnaval? Confira já
                        como fazer uso dessas mesmas peças no inverso e continuar na moda!</p>
                </div>
            </div>
            <div className={style.blog__terciario}>
                <figure className={style.blog__imagem__terciaria}>
                    <img className={style.blog__imagem__terciaria__tamanho} src={process.env.PUBLIC_URL + 'images/blog/ImagemBlogTerciaria.jpg'} alt="mulher vestida blusa branca manga longa cachecol shots jeans e bota couro marrom" />
                </figure>
                <p className={style.blog__texto__terceiro}>O que fazer com o look que usou no carnaval? Confira já
                    como fazer uso dessas mesmas peças no inverso e continuar na moda!</p>
            </div>
        </div>
        </section>
    )
}