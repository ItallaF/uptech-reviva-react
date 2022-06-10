import style from './header_index.module.scss';

export default function Logo(){
    return(
        <div className={style.cabecalho__logo}>
            <h1 className={style.cabecalho__logo__titulo}>Reviva Fashion</h1>
            <p className={style.cabecalho__logo__texto}>by RCHLO</p>
        </div>
    );
}