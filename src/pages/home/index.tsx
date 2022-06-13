import Banner from '../../components/banner/banner';
import Blog from '../../components/blog/blog_index';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header_index';
import ProductList from '../../components/listProduct/listProduc';
//import ProductListSummer from '../../components/listProduct/lIstProductSummer';
import Navbar from '../../components/navbar/navbar';
import SearchForm from '../../components/search_form/searchForm';
import { listProduct } from './date';
import { RecoilRoot } from 'recoil';

export default function Home(){
    const productsLauntch = listProduct.filter(product => product.sectionProduct === 1);
    const productsSummer = listProduct.filter(product => product.sectionProduct === 2) ;
    return (
        <RecoilRoot>
        <aside>
            <Header />
            <Navbar />
            <SearchForm />
            <ProductList title='Ultimos Lançamentos' ProductsSection={productsLauntch} />      
            <Banner />
            <ProductList title='Coleção Verão 2022' ProductsSection={productsSummer} />
            <Blog />
            <Footer />
        </aside>
        </RecoilRoot>
    )
}



