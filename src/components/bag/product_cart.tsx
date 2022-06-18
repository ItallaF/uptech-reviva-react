import { useRecoilValue, useSetRecoilState } from 'recoil';
import style from './bag.module.scss';
import { CartItens } from '../types/typeCart';
import { listCarState } from './StateCart/listCartState';
import { listProduct } from '../../datas/date';



export default function ProductBag(product: CartItens): any{
     const listProductBag = useRecoilValue(listCarState);

     const newQuanty = useSetRecoilState(listCarState);
     function handleChangeQuantity(id: number, quantity: number) {
         const newQuantyProduct = listProductBag.map((item) => {
             if (item.id === id) return ({ ...item, quantity })
             return item
         })
         newQuanty(newQuantyProduct);
     };


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
                <input type="number" id={`${products.id}`} name={`${products.id}`}
                min={1} max={99} className={style.minha__sacola__quantidade__valor}
                onChange={(e) => handleChangeQuantity(products.id, +e.target.value)}
                value={products.quantity}
                />
                </div>
                <div className={style.minha__sacola__subtotal__produto}>
                    <h3 className={style.minha__sacola__produto__titulo}>
                        Subtotal
                    </h3>
                    <p className={style.minha__sacola__produto__preco}>R$
                    {(products.price * products.quantity).toFixed(2).replace('.', ',')}
                    </p>
                </div>
            </section>
        )
        
    );
}

