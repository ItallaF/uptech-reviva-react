import React from "react";
import style from './index.module.scss';

export default function Home(){
    return (
        <aside>
            <header className={style.cabecalho}>
        <div className={style.cabecalho__logo}>
            <h1 className={style.cabecalho__logo__titulo}>Reviva Fashion</h1>
            <p className={style.cabecalho__logo__texto}>by RCHLO</p>
        </div>
        <div className={style.cabecalho__vetor}>
            <a className={style.cabecalho__vetor__botao}>
                <svg width="28px" height="31.94px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M112 112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V160H400C426.5 160 448 181.5 448 208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112V112zM160 160H288V112C288 76.65 259.3 48 224 48C188.7 48 160 76.65 160 112V160zM136 256C149.3 256 160 245.3 160 232C160 218.7 149.3 208 136 208C122.7 208 112 218.7 112 232C112 245.3 122.7 256 136 256zM312 208C298.7 208 288 218.7 288 232C288 245.3 298.7 256 312 256C325.3 256 336 245.3 336 232C336 218.7 325.3 208 312 208z"/>
                </svg></a>
        </div>
    </header>
    <section className={style.menu}>
            <nav className={style.menu__lista}>
                <button className={style.menu__botao} >&#9776;</button>
                <a className={style.menu__link} href="#">Página Inicial</a>
                <a className={style.menu__link} href="#">Moda Masculina</a>
                <a className={style.menu__link} href="#">Moda Feminina</a>
                <a className={style.menu__link} href="#">Moda Infantil</a>
                <a className={style.menu__link} href="#">Moda Manual da Moda</a>
            </nav>
        </section>
        <form className={style.formulario}>
            <input type="text" className={style.formulario__pesquisar}
                placeholder="Faça sua busca aqui se  já souber o que está procurando" name="search" />
            <button className={style.formulario__botao__pesquisa} type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" fill="currentColor"
                className={style.biSearch} viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </button>
        </form>

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
        </aside>
    )
}



