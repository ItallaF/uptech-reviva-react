import Banner from '../../components/banner/banner';
import Blog from '../../components/blog/blog_index';
import ProductList from '../../components/listProduct/listProduc';
import { listProduct } from '../../datas/date';
import { RecoilRoot, useRecoilValue } from 'recoil';

export default function Home() {
    const listProductSection = useRecoilValue(listProduct);
    const productsLauntch = Object.values(listProductSection).filter(product => product.sectionProduct === 1);
    const productsSummer = Object.values(listProductSection).filter(product => product.sectionProduct === 2);
    return (
        <RecoilRoot>
            <main>
                <ProductList title='Ultimos Lançamentos' ProductsSection={productsLauntch} />
                <Banner />
                <ProductList title='Coleção Verão 2022' ProductsSection={productsSummer} />
                <Blog />
            </main>
        </RecoilRoot>
    )
}



