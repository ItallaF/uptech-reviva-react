import Banner from "../../components/banner/banner";
import ImageProductDetais from "../../components/detailsProduct/detailsProductImage.tsx/detailsProductImage";
import ProductContent from "../../components/detailsProduct/productContent/productConten";
import ProductList from "../../components/listProduct/listProduc";
import DetailsProduct from "./styled";
import { useParams } from 'react-router-dom';
import { NotFound } from "../NotFound/notFoud";
import { useProductContext } from "../../contexts/productContext";

export default function Details() {
    const { listproducts } = useProductContext();
    const { id } = useParams();
    const products = listproducts.find(item => item.id === Number(id));
    console.log(products);
    if (!products) {

        return <NotFound />;

    } else {
        const productsSummer = listproducts.filter(item => item.sectionProduct === 2);
        return (
            <>
                <DetailsProduct>
                    <ImageProductDetais />
                    <ProductContent />
                </DetailsProduct>
                <Banner />
                <ProductList title='Quem comprou camiseta Reviva K22, também levou um desses para casa!' ProductsSection={productsSummer} />
            </>
        );
    }

}