import style from './navbar.module.scss';

export default function Navbar(){
    return (
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
    )     
}
