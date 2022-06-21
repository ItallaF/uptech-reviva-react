import { useRecoilValue } from 'recoil';
import { listCarState } from '../StateCart/listCartState';
import { MyBagProductPrice, MyBagProductTitle } from './styledSubtotal';


export default function Subtotal() {
    const productCart = useRecoilValue(listCarState);
    return (
        <div>
            <MyBagProductTitle>
                Subtotal
            </MyBagProductTitle>
            <MyBagProductPrice>R$
                {productCart.map((products) =>
                    (products.price * products.quantity).toFixed(2).replace('.', ','))}
            </MyBagProductPrice>
        </div>
    );
}