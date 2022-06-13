import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { listCarState } from './listCartState';
import style from './bag.module.scss';
import { listProduct } from '../../pages/home/date';



export default function ImageBag(): any{
    const [productList, setProductList] = useState(listProduct);
    const productCart = useRecoilValue(listCarState);


      return(
        productCart.map((products) =>  
          <figure className={style.minha__sacola__imagem}>
              <img className={style.minha__sacola__imagem__produto}
              src={products.images[0].url} alt={products.images[0].description} />
          </figure>
          )
      );
}