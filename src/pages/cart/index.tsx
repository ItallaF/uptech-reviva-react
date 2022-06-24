import Total from '../../components/bag/total/total';
import ProductBag from '../../components/bag/product_cart';
import { RecoilRoot } from 'recoil';
import { MyBag2 } from '../../components/bag/styledProductCart';



export default function Cart() {
    return (
        <RecoilRoot>
            <section>
                <ProductBag id={0} nameProduct={''} url={''} price={0} description={''} sizesAvailable={[]} quantity={0} sectionProduct={0} images={[]} />
                <MyBag2>
                    <Total />
                </MyBag2>
            </section>
        </RecoilRoot>


    )
}