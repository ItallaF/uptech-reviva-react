import { useCartContext } from '../../../contexts/cartContenxt';
import { CartItens } from '../../types/types';
import { MyBagImage, MyBagImageProduct } from './styledImagebag';


export default function ImageBag(): any {
  const {ProductCart } = useCartContext();

  return (
    ProductCart.map((products) =>
      <MyBagImage>
        <MyBagImageProduct src={products.images[0].url}></MyBagImageProduct>
      </MyBagImage>
    )
  );
}