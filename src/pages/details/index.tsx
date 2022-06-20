import { useRecoilValue } from "recoil";
import Banner from "../../components/banner/banner";
import ImageProductDetais from "../../components/detailsProduct/detailsProductImage.tsx/detailsProductImage";
import ProductContent from "../../components/detailsProduct/productContent/productConten";
import ProductList from "../../components/listProduct/listProduc";
import { listProduct } from "../../datas/date";
import DetailsProduct from "./styled";


export default function Details(){
    const listProductSection = useRecoilValue(listProduct);
    const productsSummer = Object.values(listProductSection).filter(product => product.sectionProduct === 2);
    return(
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