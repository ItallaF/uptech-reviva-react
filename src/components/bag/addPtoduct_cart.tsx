import { productImage } from "../types/typeCart";


export const addToCart = (cart: any, item: {
    id: number,
    nameProduct: string,
    url: string,
    price: number,
    description: string,
    sizesAvailable: string[],
    sectionProduct: number,
    images: productImage[]
     }) => {
    console.log(cart)
    const newCart = [...cart];
    const foundIndex = cart.findIndex((x: { id: any; }) => x.id === item.id);
  
    if (foundIndex >= 0) {
    newCart[foundIndex] = {
    ...cart[foundIndex],
    quantityAvailable: cart[foundIndex].quantityAvailable + 1,
    };
    return newCart;
    }
  
    newCart.push({
      id: item.id,
      nameProduct: item.nameProduct, 
      url: item.url,
      price: item.price,
      description: item.description, 
      sizesAvailable: item.sizesAvailable,
      quantityAvailable: 1,
      sectionProduct: item.sectionProduct,  
      images: item.images
      });
    return newCart;
  };