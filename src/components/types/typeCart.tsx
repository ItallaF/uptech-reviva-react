import { productImage } from "../../pages/home/date";

export interface CartItens {
    id: number;
    nameProduct: string;
    url: string;
    price: number;
    description: string;
    sizesAvailable: string[];
    quantity: number;
    sectionProduct: number;
    images: productImage[];
};