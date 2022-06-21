import { useRecoilValue } from 'recoil';
import { listCarState } from '../StateCart/listCartState';
import { MyBagProductTitle, MyBagProductPrice } from './styledProductValue';


export default function ValueProductBag() {
    const productCart = useRecoilValue(listCarState);

    return (
        <div>
            <MyBagProductTitle>
                Valor
            </MyBagProductTitle>
            <MyBagProductPrice>
                R$ {productCart.map((products) =>
                    (products.price.toFixed(2).replace('.', ','))
                )}
            </MyBagProductPrice>
        </div>
    )
}