import { useRecoilValue } from 'recoil';
import { listCarState } from '../StateCart/listCartState';
import { CartItens } from '../../types/typeCart';
import { MyBagImage, MyBagImageProduct } from './styledImagebag';


export default function ImageBag(): any {
  const getImages = useRecoilValue<CartItens[]>(listCarState)
  const images = [...getImages];
  //const productCart = useRecoilValue(listCarState);

  return (
    images.map((products) =>
      <MyBagImage>
        <MyBagImageProduct src={products.images[0].url}></MyBagImageProduct>
      </MyBagImage>
    )
  );
}