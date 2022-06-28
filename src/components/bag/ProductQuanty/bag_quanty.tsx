import { useCartContext } from '../../../contexts/cartContenxt';
import { MyBagProductTitle, MyBagQuantityProductValue } from './styledProductQuanty';


export default function QuantyBag() {
    const {ProductCart, newQuanty} = useCartContext();
    return (
        <div>
            <MyBagProductTitle>
                Quantidade
            </MyBagProductTitle>
            {ProductCart.map((products) =>
                <MyBagQuantityProductValue type="number" id={`${products.id}`} name={`${products.id}`}
                    min={1} max={99} onChange={(e) =>
                        newQuanty(products.id, +e.target.value)}
                    value={products.quantityAvailable}
                />
            )}
        </div>
    );
}