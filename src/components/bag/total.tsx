import { useRecoilValue } from 'recoil';
import style from './bag.module.scss';
import { listCarState } from './listCartState';


export default function Total(){
    const productCart = useRecoilValue(listCarState);
    const cartPriceTotal = productCart.reduce(
        (acc, item) => acc + (item.price * item.quantity),
        0
      );
      console.log(cartPriceTotal)

    return(
        <div className={style.minha__sacola__total}>
                    <div className={style.minha__sacola__total__final}>
                        <h4 className={style.minha__sacola__total__conteudo}>Total</h4>
                        <h4 className={style.minha__sacola__total__conteudo}>
                            {cartPriceTotal.toFixed(2).replace('.',',')}
                        </h4>
                    </div>
                    <div className={style.minha__sacola__total__final}>
                        <p className={style.minha__sacola__total__conteudo}>1 x 
                        {cartPriceTotal.toFixed(2).replace('.',',')}</p>
                        <p className={style.minha__sacola__total__conteudo}>=</p>
                        <p className={style.minha__sacola__total__conteudo}>
                            {cartPriceTotal.toFixed(2).replace('.',',')}
                        </p>
                    </div>
                    <div className={style.minha__sacola__total__final}>
                        <p className={style.minha__sacola__total__conteudo}>2 x 
                            {(cartPriceTotal/2).toFixed(2).replace('.',',')}
                        </p>
                        <p className={style.minha__sacola__total__conteudo}>=</p>
                        <p className={style.minha__sacola__total__conteudo}>
                            {cartPriceTotal.toFixed(2).replace('.',',')}
                        </p>
                    </div>
                <div className={style.minha__sacola__botao__total}>
                    <button className={style.minha__sacola__botao__total__pagamento} >Ir para pagamento</button>               
                </div>
                </div>
    );
}