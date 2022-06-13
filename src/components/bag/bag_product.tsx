import { useRecoilValue } from 'recoil';
import style from './bag.module.scss';
import { cart } from './cart_product';
import { listCarState } from './listCartState';


export default function BagProduct(): any{

    const productCart = useRecoilValue(listCarState);
    return(
        productCart.map((products) =>
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