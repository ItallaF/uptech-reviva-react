import { useRecoilValue } from "recoil";
import Banner from "../../components/banner/banner";
// import ImageProductDetais from "../../components/detailsProduct/detailsProductImage.tsx/detailsProductImage";
// import ProductContent from "../../components/detailsProduct/productContent/productConten";
import ProductList from "../../components/listProduct/listProduc";
import { listProduct } from "../../datas/date";
import DetailsProduct from "./styled";
import { useParams } from 'react-router-dom';
import { ProductStock } from "../../components/types/typeCart";
import { NotFound } from "../NotFound/notFoud";

// export default function Details() {
//     const product = useRecoilValue(listProduct);
//     const { id } = useParams();
//     const products = product.find(item => item.id === Number(id));
//     console.log(products);
//     if (!products) {

//         return <NotFound />;

//     } else {
//         const productsSummer = Object.values(product).filter(item => item.sectionProduct === 2);
//         return (
//             <>
//                 <DetailsProduct>
//                     <ImageProductDetais />
//                     <ProductContent />
//                 </DetailsProduct>
//                 <Banner />
//                 <ProductList title='Quem comprou camiseta Reviva K22, também levou um desses para casa!' ProductsSection={productsSummer} />
//             </>
//         );
//     }

// }