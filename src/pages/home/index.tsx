import Banner from '../../components/banner/banner';
import Blog from '../../components/blog/blog_index';
import ProductList from '../../components/listProduct/listProduc';
import { useContext, useEffect } from 'react';
import { ProductsContext } from '../../contexts/productContext';

export default function Home() {

    const { listproducts } = useContext(ProductsContext);
    const productsLauntch = listproducts.filter(product => product.sectionProduct === 1);
    const productsSummer = listproducts.filter(product => product.sectionProduct === 2);

    
    return (
        <main>

            <ProductList title='Ultimos Lançamentos' ProductsSection={productsLauntch} />
            <Banner />
            <ProductList title='Coleção Verão 2022' ProductsSection={productsSummer} />
            <Blog />
        </main>
    )
}



