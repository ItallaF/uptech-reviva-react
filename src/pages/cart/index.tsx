import style from '../../components/bag/bag.module.scss';
import Total from '../../components/bag/total/total';
import ProductBag from '../../components/bag/product_cart';
import { RecoilRoot } from 'recoil';



export default function Cart() {
    return (
        <RecoilRoot>
            <section>
                <ProductBag id={0} nameProduct={''} url={''} price={0} description={''} sizesAvailable={[]} quantity={0} sectionProduct={0} images={[]} />
                <div className={style.minha__sacola2}>
                    <Total />
                </div>
            </section>
        </RecoilRoot>


    )
}