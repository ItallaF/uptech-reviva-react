import { useCartContext } from '../../../contexts/cartContenxt';
import { MyBagProductPrice, MyBagProductTitle } from './styledSubtotal';


export default function Subtotal() {
    const {ProductCart, newQuanty} = useCartContext();
    return (
        <div>
            <MyBagProductTitle>
                Subtotal
            </MyBagProductTitle>
            <MyBagProductPrice>R$
                {ProductCart.map((products) =>
                    (products.price * products.quantityAvailable).toFixed(2).replace('.', ','))}
            </MyBagProductPrice>
        </div>
    );
}