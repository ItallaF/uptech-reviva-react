import style from './bag.module.scss';
import { cart } from './cart_product';


export default function ValueProductBag(){
    return(
        <div className={style.minha__sacola__valor__produto}>
            <h3 className={style.minha__sacola__produto__titulo}>
                Valor
            </h3>
            <p className={style.minha__sacola__produto__preco}>
            {cart.map((products) => 
                products.price
            ) }
            </p>
        </div>
    )
}