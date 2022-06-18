import style from './navbar.module.scss';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <section className={style.menu}>
            <nav className={style.menu__lista}>
                <button className={style.menu__botao} >&#9776;</button>
                <Link className={style.menu__link} to="#">Página Inicial</Link>
                <Link className={style.menu__link} to="#">Moda Masculina</Link>
                <Link className={style.menu__link} to="#">Moda Feminina</Link>
                <Link className={style.menu__link} to="#">Moda Infantil</Link>
                <Link className={style.menu__link} to="#">Moda Manual da Moda</Link>
            </nav>
    </section>
    )     
}
