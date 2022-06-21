import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listCarState } from '../StateCart/listCartState';
import { MyBagProductTitle, MyBagQuantityProductValue } from './styledProductQuanty';


export default function QuantyBag() {
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
        <div>
            <MyBagProductTitle>
                Quantidade
            </MyBagProductTitle>
            {listProductBag.map((products) =>
                <MyBagQuantityProductValue type="number" id={`${products.id}`} name={`${products.id}`}
                    min={1} max={99} onChange={(e) =>
                        handleChangeQuantity(products.id, +e.target.value)}
                    value={products.quantity}
                />
            )}
        </div>
    );
}