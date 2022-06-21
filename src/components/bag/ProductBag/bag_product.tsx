import { useRecoilValue } from 'recoil';
import { listCarState } from '../StateCart/listCartState';
import { MyBagProductDescription, MyBagProductTitle } from './styledProduct';


export default function BagProduct(): any {

    const productCart = useRecoilValue(listCarState);
    return (
        productCart.map((products) =>
            <div>
                <MyBagProductTitle>
                    {products.nameProduct}
                </MyBagProductTitle>
                <MyBagProductDescription>
                    {products.nameProduct}
                </MyBagProductDescription>
            </div>
        )
    );
}