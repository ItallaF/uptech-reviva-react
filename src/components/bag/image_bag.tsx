import { useState } from 'react';
import { listProduct, productImage } from '../../pages/home/date';
import style from './bag.module.scss';
import { cart } from './cart_product';



export default function ImageBag(): any{

    //const [cart, setCart] = useState<CartItens[]>([]);
      return(
          cart.map((products) =>  
          <figure className={style.minha__sacola__imagem}>
              <img className={style.minha__sacola__imagem__produto}
              src={products.images[0].url} alt={products.images[0].description} />
          </figure>
          )
      );
}