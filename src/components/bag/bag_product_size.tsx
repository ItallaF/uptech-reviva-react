import style from './bag.module.scss';
import { cart } from './cart_product';


export default function ProductSizeBag(){
    return(
        <>
        <div className={style.minha__sacola__detlahes__produto__tamanho}>
            <h3 className={style.minha__sacola__produto__titulo}>
                Tamanho escolhido
            </h3>
            <div className={style.minha__sacola__imagem__botao}>  
                {cart.map((products) => 
                products.sizesAvailable.map((t, index) => (
                <label key={index} className={style.minha__sacola__botao__tamanho}>
                    {products.sizesAvailable[index]}
                    <input type='radio' name="size" />
                </label>
            ))
            ) }
            </div>
        </div>
        </>
    );
}