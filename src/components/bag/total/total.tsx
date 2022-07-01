import { useCartContext } from '../../../contexts/cartContenxt';
import { MyBagTotal, MyBagTotalButton, MyBagTotalButtonPay, MyBagTotalContent, MyBagTotalFinal } from './styledTotal';


export default function Total() {
    const {ProductCart } = useCartContext();
    const cartPriceTotal = ProductCart
    .reduce((subtotal, item) =>
        subtotal + (item.price * item.quantityAvailable),
        0
    );


return (
    <MyBagTotal>
        <MyBagTotalFinal>
            <MyBagTotalContent>Total</MyBagTotalContent>
            <MyBagTotalContent>
                {cartPriceTotal.toFixed(2).replace('.', ',')}
            </MyBagTotalContent>
        </MyBagTotalFinal>
        <MyBagTotalFinal>
            <MyBagTotalContent>1 x
                {cartPriceTotal.toFixed(2).replace('.', ',')}</MyBagTotalContent>
            <MyBagTotalContent>=</MyBagTotalContent>
            <MyBagTotalContent>
                {cartPriceTotal.toFixed(2).replace('.', ',')}
            </MyBagTotalContent>
        </MyBagTotalFinal>
        <MyBagTotalFinal>
            <MyBagTotalContent>2 x
                {(cartPriceTotal / 2).toFixed(2).replace('.', ',')}
            </MyBagTotalContent>
            <MyBagTotalContent>=</MyBagTotalContent>
            <MyBagTotalContent>
                {cartPriceTotal.toFixed(2).replace('.', ',')}
            </MyBagTotalContent>
        </MyBagTotalFinal>
        <MyBagTotalButton>
            <MyBagTotalButtonPay>Ir para pagamento</MyBagTotalButtonPay>
        </MyBagTotalButton>
    </MyBagTotal>
);
}