import { useRecoilState } from 'recoil';
import { listProduct } from '../../datas/date';
import { addToCart } from '../bag/FunctionsCart/addPtoduct_cart';
import { stateCart } from '../bag/StateCart/listCartState';
import { ProductStock } from '../types/typeCart';
import { decrementStock } from './functionStock';
import style from './lisproduct.module.scss';


interface ProductlistProps {
    title: string;
    ProductsSection: ProductStock[];
}


export default function ProductList({ title, ProductsSection }: ProductlistProps){
    const [productInStock, setProductInStock] = useRecoilState(listProduct);
    const [cart, setCart] = useRecoilState(stateCart);
       
    const handleAddToCart = (product: ProductStock) => {
        //console.log(cart, product);
        const newCart = addToCart(cart, product); 
        setCart(newCart);

        console.log(productInStock, product);
        const newProduct = decrementStock(productInStock, product);
        setProductInStock(newProduct);
    }        
    
    return(
        <aside>
        <h4 className={style.produto__lista__titulo}>{ title }</h4>
        <section className={style.produto__lista} >
            {ProductsSection.map((products) =>
                    <div className={style.produto__lista__conteudo} key ={products.id}>
                    <figure className={style.produto__lista__imagem__borda}>
                        <img className={style.produto__lista__imagem__tamanhos} src={products.images[0].url} alt={products.images[0].description} />
                        <div className={style.produto__lista__imagem__botao}>
                            {products.sizesAvailable.map((t, index) => (
                                <label key={index} className={style.produto__lista__imagem__botao__tamanho}>
                                    {products.sizesAvailable[index]}
                                    <input type='radio' name="size" />
                                </label>
                            ))}
                        </div>
                    </figure>
                    <div className={style.produto__lista__texto}>
                        <p>{products.nameProduct}</p>
                    </div>
                    <div className={style.produto__lista__preco}>
                        <p>{products.price}</p>
                    </div> 
                    <div className={style.produto__lista__botao}>
                        <button className={style.produto__lista__botao__sacola}
                        onClick={() => handleAddToCart(products)}>Por na Sacola
                            <div className={style.produto__lista__botao__svg}>
                                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 5.98944C6 2.68134 8.68393 0 12 0C15.3161 0 18 2.68134 18 5.98944V8.55634H21.4286C22.8482 8.55634 24 9.7061 24 11.1232V22.2465C24 25.0808 21.6964 27.3803 18.8571 27.3803H5.14286C2.3025 27.3803 0 25.0808 0 22.2465V11.1232C0 9.7061 1.15125 8.55634 2.57143 8.55634H6V5.98944ZM8.57143 8.55634H15.4286V5.98944C15.4286 4.09902 13.8911 2.5669 12 2.5669C10.1089 2.5669 8.57143 4.09902 8.57143 5.98944V8.55634ZM7.28571 13.6901C7.99821 13.6901 8.57143 13.1179 8.57143 12.4067C8.57143 11.6954 7.99821 11.1232 7.28571 11.1232C6.57321 11.1232 6 11.6954 6 12.4067C6 13.1179 6.57321 13.6901 7.28571 13.6901ZM16.7143 11.1232C16.0018 11.1232 15.4286 11.6954 15.4286 12.4067C15.4286 13.1179 16.0018 13.6901 16.7143 13.6901C17.4268 13.6901 18 13.1179 18 12.4067C18 11.6954 17.4268 11.1232 16.7143 11.1232Z" fill="white"/>
                                </svg>                        
                            </div>
                        </button>               
                    </div> 
                </div>
            )}
        </section> 
        </aside>
    )
}
