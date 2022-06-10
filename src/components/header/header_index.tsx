import style from './header_index.module.scss'
import Logo from './logo'
import Vector from './vector'

export default function Header(){
    return(
        <header className={style.cabecalho}>
        <Logo />
        <Vector />
        </header>
    )
}