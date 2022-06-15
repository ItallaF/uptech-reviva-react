import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { listCarState, updateQuantityCart } from './listCartState';
import style from './bag.module.scss';
import {  useState } from 'react';
import { CartItens } from '../types/typeCart';



export default function ProductBag(product: CartItens): any{
     const listProductBag = useRecoilValue(listCarState);

    // const [cartList, setCartList] = useRecoilState(listCarState)
    // const newCart: CartItens[] =  JSON.parse(JSON.stringify(cartList));
    // //const productCart = useRecoilValue(listCarState)
    // const [value, setValue] = useState(product.quantity);

    
    // const updateQuantity = (value: number) => {
    //     const indexItem = newCart.findIndex((item: CartItens) => item.id === product.id);
    //     console.log(product.id)
    //     newCart[indexItem].quantity = value
        
    //     return newCart
    // }

    // const setUpdateQtyCart = (value: number) => {
    //     setCartList(() => updateQuantity(value))
    // }
    
    // useEffect(() => {
    //     setValue(product.quantity)
    // }, [cartList])

    const newQuanty =  useSetRecoilState(updateQuantityCart);
    const productCart = useRecoilValue(updateQuantityCart);
    const [value, setValue] = useState<any>(1);
    const changeCart = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const newQuantyProduct = productCart.map((item) => {
            if(item.id === Number(e.target.id)){
                console.log({...item, carrinho: e.target.value})
             return {...item, carrinho: e.target.value}
            }else{
                //console.log(item)
               return item 
            }
           
          })
          setValue(e.target.value);
          newQuanty(newQuantyProduct);
    }


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
                min={1} max={99} 
                className={style.minha__sacola__quantidade__valor}
                onChange={changeCart} value={value} 
                />
                </div>
                <div className={style.minha__sacola__subtotal__produto}>
                    <h3 className={style.minha__sacola__produto__titulo}>
                        Subtotal
                    </h3>
                    <p className={style.minha__sacola__produto__preco}>R$
                        {(products.price * value ).toFixed(2).replace('.',',')}
                    </p>
                </div>
            </section>
        )
        
    );
}

