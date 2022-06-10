import style from './bag.module.scss';
import { cart } from './cart_product';


export default function Subtotal(){
    return(
        <div className={style.minha__sacola__subtotal__produto}>
            <h3 className={style.minha__sacola__produto__titulo}>
                Subtotal
            </h3>
            <p className={style.minha__sacola__produto__preco}>
            {cart.map((products) => 
                (products.price * products.quantity).toFixed(2)
            )}
            </p>
        </div>
    )
}