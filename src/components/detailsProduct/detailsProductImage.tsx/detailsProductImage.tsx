import { useParams } from "react-router-dom";
import { useProductContext } from "../../../contexts/productContext";
import { NotFound } from "../../../pages/NotFound/notFoud";
import { ImageProduct } from "./styles/styledImageProduct";
import ImageDetails from "./styles/styledProductImage";


export default function ImageProductDetais() {
    const { listproducts } = useProductContext();
    const { id } = useParams();
    const products = listproducts.find(item => item.id === Number(id));

    if (!products) {

        return <NotFound />;

    }

    return (
        <ImageDetails>
            <ImageProduct src={products.images[0].url} alt={products.images[0].description} />
        </ImageDetails>
    );
}