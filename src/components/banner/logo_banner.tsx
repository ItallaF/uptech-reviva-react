import style from './banner.module.scss';

export default function LogoBanner(){
    return(
        <div className={style.banner__logo}>
                <h1 className={style.logo__titulo}>Reviva Fashion</h1>
                <p className={style.logo__texto}>by RCHLO</p>
            </div>
    );
}