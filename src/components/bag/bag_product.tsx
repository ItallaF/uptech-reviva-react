import style from './bag.module.scss';
import { cart } from './cart_product';


export default function BagProduct(): any{
    return(
        cart.map((products) =>
        <div className={style.minha__sacola__produto}>
            <h3 className={style.minha__sacola__produto__titulo}>
                {products.nameProduct}
            </h3>
            <p className={style.minha__sacola__produto__descericao}>
                {products.description}
            </p>
        </div>
        )
    );
}