import { useRecoilValue } from 'recoil';
import style from './bag.module.scss';
import { listCarState } from '../StateCart/listCartState';


export default function Subtotal(){
    const productCart = useRecoilValue(listCarState);
    return(
        <div className={style.minha__sacola__subtotal__produto}>
            <h3 className={style.minha__sacola__produto__titulo}>
                Subtotal
            </h3>
            <p className={style.minha__sacola__produto__preco}>
            {productCart.map((products) => 
                (products.price * products.quantity).toFixed(2)
            )}
            </p>
        </div>
    )
}