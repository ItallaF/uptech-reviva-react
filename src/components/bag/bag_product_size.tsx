import { useRecoilValue } from 'recoil';
import style from './bag.module.scss';
import { listCarState } from './listCartState';


export default function ProductSizeBag(){
    const productCart = useRecoilValue(listCarState);

    return(
        <>
        <div className={style.minha__sacola__detlahes__produto__tamanho}>
            <h3 className={style.minha__sacola__produto__titulo}>
                Tamanho escolhido
            </h3>
            <div className={style.minha__sacola__imagem__botao}>  
                {productCart.map((products) => 
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