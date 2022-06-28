import { useCartContext } from '../../../contexts/cartContenxt';
import { MyBagButtonSize, MyBagButtonSizeInput, MyBagProductTitle } from './styledProductSize';


export default function ProductSizeBag() {
    const {ProductCart, newQuanty} = useCartContext();

    return (
        <>
            {ProductCart.map((products) =>
                <div>
                    <MyBagProductTitle>
                        Tamanho escolhido
                    </MyBagProductTitle>
                    {products.sizesAvailable.map((t, index) => (
                        <MyBagButtonSize key={index}>
                            <MyBagButtonSizeInput type="radio" name="tamanho" value={products.sizesAvailable[index]} />
                            {products.sizesAvailable[index]}
                        </MyBagButtonSize>
                    ))}
                </div>
            )}
        </>
    );
}