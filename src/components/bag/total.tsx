import { listProduct, productStock } from '../../pages/home/date';
import style from './bag.module.scss';
import { cart } from './cart_product';


export default function Total(){
    const cartPriceTotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      console.log(cartPriceTotal)

    return(
        <div className={style.minha__sacola__total}>
                    <div className={style.minha__sacola__total__final}>
                        <h4 className={style.minha__sacola__total__conteudo}>Total</h4>
                        <h4 className={style.minha__sacola__total__conteudo}>
                            {cartPriceTotal.toFixed(2)}
                        </h4>
                    </div>
                    <div className={style.minha__sacola__total__final}>
                        <p className={style.minha__sacola__total__conteudo}>1 x 
                        {cartPriceTotal.toFixed(2)}</p>
                        <p className={style.minha__sacola__total__conteudo}>=</p>
                        <p className={style.minha__sacola__total__conteudo}>
                            {cartPriceTotal.toFixed(2)}
                        </p>
                    </div>
                    <div className={style.minha__sacola__total__final}>
                        <p className={style.minha__sacola__total__conteudo}>2 x 
                            {(cartPriceTotal/2).toFixed(2)}
                        </p>
                        <p className={style.minha__sacola__total__conteudo}>=</p>
                        <p className={style.minha__sacola__total__conteudo}>
                            {cartPriceTotal.toFixed(2)}
                        </p>
                    </div>
                <div className={style.minha__sacola__botao__total}>
                    <button className={style.minha__sacola__botao__total__pagamento} >Ir para pagamento</button>               
                </div>
                </div>
    );
}