import { useRecoilValue } from 'recoil';
import style from './productSize.module.scss';
import { listCarState } from '../StateCart/listCartState';
import { MyBagButtonSize, MyBagButtonSizeInput, MyBagProductTitle } from './styledProductSize';


export default function ProductSizeBag() {
    const productCart = useRecoilValue(listCarState);

    return (
        <>
            {productCart.map((products) =>
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