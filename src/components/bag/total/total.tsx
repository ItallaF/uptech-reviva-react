import { useRecoilValue } from 'recoil';
import { listCarState } from '../StateCart/listCartState';
import { MyBagTotal, MyBagTotalButton, MyBagTotalButtonPay, MyBagTotalContent, MyBagTotalFinal } from './styledTotal';


export default function Total() {
    const productCart = useRecoilValue(listCarState);
    const cartPriceTotal = productCart
        .reduce((subtotal, item) =>
            subtotal + (item.price * item.quantity),
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