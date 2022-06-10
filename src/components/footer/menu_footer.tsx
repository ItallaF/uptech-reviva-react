import style from './footer.module.scss'


export default function MenuFooter(){
    const linksFooter = [
    <><li className={style.rodape__itens__menu}>
        <a href="#">Página Inicial</a></li>
        <li className={style.rodape__itens__menu}>
            <a href="#">Moda Masculina</a></li>
        <li className={style.rodape__itens__menu}>
            <a href="#">Moda Feminina</a></li>
        <li className={style.rodape__itens__menu}>
            <a href="#">Moda Infantil</a></li>
        <li className={style.rodape__itens__menu}>
            <a href="#">Moda Manual da Moda</a></li>
    </>
]
    return(
        <section className={style.rodape__menu}>
            <h4>Menu</h4>
            <nav>
                <ul>{linksFooter}</ul>
            </nav>     
        </section>
    );
}