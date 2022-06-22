import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { listProduct } from "../../../datas/date";
import { NotFound } from "../../../pages/NotFound/notFoud";
import { ImageProduct } from "./styles/styledImageProduct";
import ImageDetails from "./styles/styledProductImage";


export default function ImageProductDetais() {
    const product = useRecoilValue(listProduct);
    const { id } = useParams();
    const products = product.find(item => item.id === Number(id));

    if (!products) {

        return <NotFound />;

    }

    return (
        <ImageDetails>
            <ImageProduct src={products.images[0].url} alt={products.images[0].description} />
        </ImageDetails>
    );
}