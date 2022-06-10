import style from './bag.module.scss';
import { cart } from './cart_product';


export default function QuantyBag(){
    return(
        <div className={style.minha__sacola__quantidade__produto}>
            <h3 className={style.minha__sacola__produto__titulo}>
                Quantidade
            </h3>
            <div className={style.minha__sacola__botao__quantidade}>
            <label className={style.minha__sacola__quantidade__botao}>-
            <input type="radio" name="-" className={style.minha__sacola__quantidade__botao} />
            </label>
                
                <p className={style.minha__sacola__quantidade__valor}>
                    {cart.map((products) => 
                        products.quantity
                    ) }
                </p>
                <label className={style.minha__sacola__quantidade__botao}>+
                    <input type="radio" name="-" className={style.minha__sacola__quantidade__botao} />
                </label>
            </div>
        </div>
    );
}