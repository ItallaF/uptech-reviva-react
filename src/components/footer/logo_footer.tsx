import style from './footer.module.scss';

export default function LogoFooter(){
    return(
        <div className={style.rodape__logo}>
            <h1 className={style.logo__titulo}>Reviva Fashion</h1>
            <p className={style.logo__texto}>by RCHLO</p>
        </div>
    );
}