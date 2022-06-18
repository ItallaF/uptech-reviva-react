import { useRecoilValue } from 'recoil';
import style from './bag.module.scss';
import { listCarState } from '../StateCart/listCartState';


export default function ValueProductBag(){
    const productCart = useRecoilValue(listCarState);
    
    return(
        <div className={style.minha__sacola__valor__produto}>
            <h3 className={style.minha__sacola__produto__titulo}>
                Valor
            </h3>
            <p className={style.minha__sacola__produto__preco}>
            {productCart.map((products) => 
                products.price
            ) }
            </p>
        </div>
    )
}