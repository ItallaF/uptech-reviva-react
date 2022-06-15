import Banner from '../../components/banner/banner';
import Blog from '../../components/blog/blog_index';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header_index';
import ProductList from '../../components/listProduct/listProduc';
//import ProductListSummer from '../../components/listProduct/lIstProductSummer';
import Navbar from '../../components/navbar/navbar';
import SearchForm from '../../components/search_form/searchForm';
import { listProduct } from '../../datas/date';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';

export default function Home(){
    const listProductSection = useRecoilValue(listProduct);
    const productsLauntch = Object.values(listProductSection).filter(product => product.sectionProduct === 1);
    const productsSummer = Object.values(listProductSection).filter(product => product.sectionProduct === 2);
    return (
        
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
        
    )
}



