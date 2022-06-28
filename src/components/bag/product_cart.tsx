import { MyBagButtonSize, MyBagButtonSizeInput, MyBagImage, MyBagImageProduct, MyBagProductDescription, MyBagProductPrice, MyBagProductTitle, MyBagQuantityProductValue, ProductMyBag } from './styledProductCart';
import { useCartContext } from '../../contexts/cartContenxt';



export default function ProductBag(): any {
    const { ProductCart, newQuanty, addProductCart, removeProduct} = useCartContext();


    return (
        ProductCart?.map((products) =>
            <ProductMyBag>
                <MyBagImage>
                    <MyBagImageProduct src={products.images[0].url}></MyBagImageProduct>
                </MyBagImage>
                <div>
                    <MyBagProductTitle>
                        {products.nameProduct}
                    </MyBagProductTitle>
                    <MyBagProductDescription>
                        {products.description}
                    </MyBagProductDescription>
                </div>
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
                <div>
                    <MyBagProductTitle>
                        Valor
                    </MyBagProductTitle>
                    <MyBagProductPrice>
                        R$ {products.price.toFixed(2).replace('.', ',')}
                    </MyBagProductPrice>
                </div>
                <div>
                    <MyBagProductTitle>
                        Quantidade
                    </MyBagProductTitle>
                    <MyBagQuantityProductValue onClick={() => addProductCart(products)}> + </MyBagQuantityProductValue>
                    <MyBagProductPrice>
                        {products.quantityAvailable}
                    </MyBagProductPrice>
                    <MyBagQuantityProductValue onClick={() => removeProduct(products.id)}> - </MyBagQuantityProductValue>
                </div>
                <div>
                    <MyBagProductTitle>
                        Subtotal
                    </MyBagProductTitle>
                    <MyBagProductPrice>R$
                        {(products.price * products.quantityAvailable).toFixed(2).replace('.', ',')}
                    </MyBagProductPrice>
                </div>
            </ProductMyBag>
        )

    );
}

