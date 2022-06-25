import Total from '../../components/bag/total/total';
import { MyBag2 } from '../../components/bag/styledProductCart';
import { CartProvider } from '../../contexts/cartContenxt';
// import ProductBag from '../../components/bag/product_cart';



export default function Cart() {
    return (
        <CartProvider>
            <section>
                {/* <ProductBag /> */}
            </section>
        </CartProvider>
    )
}