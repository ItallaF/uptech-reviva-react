import { productImage } from "../types/typeCart";



export const decrementStock = (product: any, item: {
    id: number,
    nameProduct: string,
    url: string,
    price: number,
    description: string,
    sizesAvailable: string[],
    sectionProduct: number,
    images: productImage[]
     }) => {
    const newproduct = [...product];
    const foundIndex = product.findIndex((x: { id: any; }) => x.id === item.id);
  
    if (foundIndex >= 0) {
    newproduct[foundIndex] = {
    ...product[foundIndex],
    quantityAvailable: product[foundIndex].quantityAvailable - 1,
    };
    return newproduct;
    }
    return newproduct;
  };