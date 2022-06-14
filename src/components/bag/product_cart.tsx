import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listCarState, updateQuantityCart } from './listCartState';
import style from './bag.module.scss';
import { useState } from 'react';
import { CartItens } from '../types/typeCart';


type FormInputs = {
    test: number
  }

export default function ProductBag(): any{
    const listProductBag = useRecoilValue(listCarState);

    return(
        listProductBag.map((products)=>
        <section className={style.minha__sacola}>
            <figure className={style.minha__sacola__imagem}>
                <img src={products.images[0].url} className={style.minha__sacola__imagem__produto}></img>
            </figure>
            <div>
                <h3 className={style.minha__sacola__produto__titulo}>
                    {products.nameProduct}
                </h3>
                <p className={style.minha__sacola__produto__descericao}>
                    {products.nameProduct}
                </p>
            </div>
            <div className={style.minha__sacola__detlahes__produto__tamanho}>
                <h3 className={style.minha__sacola__produto__titulo}>
                    Tamanho escolhido
                </h3>
                {products.sizesAvailable.map((t,index) =>  (
                <label key={index} className={style.minha__sacola__botao__tamanho}>
                    <input type="radio"  name="tamanho" value={products.sizesAvailable[index]}/>
                    {products.sizesAvailable[index]}
                    </label>             
                      ))}
            </div>
            <div className={style.minha__sacola__valor__produto}>
                <h3 className={style.minha__sacola__produto__titulo}>
                    Valor
                </h3>
                <p className={style.minha__sacola__produto__preco}>
                    R$ {products.price.toFixed(2).replace('.',',')}
                </p>
            </div>
            <div className={style.minha__sacola__quantidade__produto}>
                <h3 className={style.minha__sacola__produto__titulo}>
                    Quantidade
                </h3>
                <input type="number" size={2} min="1" max={99}
                className={style.minha__sacola__quantidade__valor}
                 value={products.quantity}/>
                </div>
                <div className={style.minha__sacola__subtotal__produto}>
                    <h3 className={style.minha__sacola__produto__titulo}>
                        Subtotal
                    </h3>
                    <p className={style.minha__sacola__produto__preco}>R$
                        {(products.price * products.quantity).toFixed(2).replace('.',',')}
                    </p>
                </div>
            </section>
        )
        
    );
}
