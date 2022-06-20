import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { listProduct } from "../../../datas/date";
import { ProductStock } from "../../types/typeCart";
import { ImageProduct } from "./styles/styledImageProduct";
import ImageDetails from "./styles/styledProductImage";

export interface Id {
    id: string | undefined
}

export default function ImageProductDetais() {
    const listProductDetails = useRecoilValue(listProduct);
    const {id} = useParams();
    console.log(id);
    const productDetails = listProductDetails.find((item) => item.id === Number(id));
      
    
    return (
        <ImageDetails>
            <ImageProduct src={process.env.PUBLIC_URL + 'images/products/product01.webp'} alt={productDetails?.images[0].description} />
        </ImageDetails>
    );
}