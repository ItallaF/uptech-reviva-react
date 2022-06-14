import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { listCarState } from './listCartState';
import style from './bag.module.scss';
import { CartItens } from '../types/typeCart';


export default function ImageBag(): any{
  const getImages = useRecoilValue<CartItens[]>(listCarState)
  const images = [...getImages];
    //const productCart = useRecoilValue(listCarState);

      return(
        images.map((products) =>  
          <figure className={style.minha__sacola__imagem}>
              <img className={style.minha__sacola__imagem__produto}
               key={images.indexOf(products)} src={products.images[0].url} alt={products.images[0].description} />
          </figure>
          )
      );
}