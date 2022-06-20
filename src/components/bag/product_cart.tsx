import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CartItens } from '../types/typeCart';
import { listCarState } from './StateCart/listCartState';
import { listProduct } from '../../datas/date';
import { MyBagButtonSize, MyBagButtonSizeInput, MyBagImage, MyBagImageProduct, MyBagProductDescription, MyBagProductPrice, MyBagProductTitle, MyBagQuantityProductValue, ProductMyBag } from './styledProductCart';



export default function ProductBag(product: CartItens): any {
    const listProductBag = useRecoilValue(listCarState);

    const newQuanty = useSetRecoilState(listCarState);
    function handleChangeQuantity(id: number, quantity: number) {
        const newQuantyProduct = listProductBag.map((item) => {
            if (item.id === id) return ({ ...item, quantity })
            return item
        })
        newQuanty(newQuantyProduct);
    };


    return (
        listProductBag.map((products) =>
            <ProductMyBag>
                <MyBagImage>
                    <MyBagImageProduct src={products.images[0].url}></MyBagImageProduct>
                </MyBagImage>
                <div>
                    <MyBagProductTitle>
                        {products.nameProduct}
                    </MyBagProductTitle>
                    <MyBagProductDescription>
                        {products.nameProduct}
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
                    <MyBagQuantityProductValue type="number" id={`${products.id}`} name={`${products.id}`}
                        min={1} max={99} onChange={(e) =>
                            handleChangeQuantity(products.id, +e.target.value)}
                        value={products.quantity}
                    />
                </div>
                <div>
                    <MyBagProductTitle>
                        Subtotal
                    </MyBagProductTitle>
                    <MyBagProductPrice>R$
                        {(products.price * products.quantity).toFixed(2).replace('.', ',')}
                    </MyBagProductPrice>
                </div>
            </ProductMyBag>
        )

    );
}

