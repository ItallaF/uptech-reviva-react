import style from './footer.module.scss';


export default function Subscription(){
    return(
        <section className={style.newsletter}>
            <h4>Assine nossa newsletter</h4>
            <input type="text" className={style.rodape__newsletter} placeholder="Assine o newsletter" name="assine" />
            <button className={style.newletter__botao}>Assine Já</button>
        </section>
    );
}