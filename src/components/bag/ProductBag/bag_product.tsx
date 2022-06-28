import { useCartContext } from '../../../contexts/cartContenxt';
import { MyBagProductDescription, MyBagProductTitle } from './styledProduct';


export default function BagProduct(): any {
    const {ProductCart, newQuanty} = useCartContext();
    
    return (
        ProductCart.map((products) =>
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