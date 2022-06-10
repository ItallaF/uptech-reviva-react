import ImageBag from '../../components/bag/image_bag';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header_index';
import Navbar from '../../components/navbar/navbar';
import SearchForm from '../../components/search_form/searchForm';
import style from '../../components/bag/bag.module.scss';
import BagProduct from '../../components/bag/bag_product';
import ProductDetailBag from '../../components/bag/bag_product_size';
import ValueProductBag from '../../components/bag/bag_value_product';
import QuantyBag from '../../components/bag/bag_quanty';
import Subtotal from '../../components/bag/subtotal';
import Total from '../../components/bag/total';


export default function Cart(){
    return(
        <>
            <Header />
            <Navbar />
            <SearchForm />
            <section className={style.minha__sacola}>
            <Total />
            <section className={style.minha__sacola2}>
            <ImageBag />
            <BagProduct />
           <ProductDetailBag />
           <ValueProductBag />
           <QuantyBag />
           <Subtotal />
           </section>
           <section className={style.minha__sacola2}>
            <ImageBag />
            <BagProduct />
           <ProductDetailBag />
           <ValueProductBag />
           <QuantyBag />
           <Subtotal />
            </section>           
            <section className={style.minha__sacola2}>
            <ImageBag />
            <BagProduct />
           <ProductDetailBag />
           <ValueProductBag />
           <QuantyBag />
           <Subtotal />
            </section>  
            <section className={style.minha__sacola2}>
            <ImageBag />
            <BagProduct />
           <ProductDetailBag />
           <ValueProductBag />
           <QuantyBag />
           <Subtotal />
            </section>  
            </section>
            <Footer />
        </>
    )
}