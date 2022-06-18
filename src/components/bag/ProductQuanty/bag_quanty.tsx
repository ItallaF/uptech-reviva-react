import { useRecoilValue } from 'recoil';
import style from './bag_quanty.module.scss';
import { listCarState } from '../StateCart/listCartState';


export default function QuantyBag(){
    const productCart = useRecoilValue(listCarState);
    
    return(
        <div className={style.minha__sacola__quantidade__produto}>
            <h3 className={style.minha__sacola__produto__titulo}>
                Quantidade
            </h3>
            <div className={style.minha__sacola__botao__quantidade}>
            <label className={style.minha__sacola__quantidade__botao}>-
            <input type="radio" name="-" className={style.minha__sacola__quantidade__valor} />
            </label>
                
                <p className={style.minha__sacola__quantidade__valor}>
                    {productCart.map((products) => 
                        products.quantity
                    ) }
                </p>
                <label className={style.minha__sacola__quantidade__botao}>+
                    <input type="radio" name="-" className={style.minha__sacola__quantidade__valor} />
                </label>
            </div>
        </div>
    );
}