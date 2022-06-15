export interface productImage {
    url: string;
    description: string;   
  } 
  
export interface ProductStock {
id: number;
nameProduct: string;
url: string;
price: number;
description: string;
sizesAvailable: string[];
quantityAvailable: number;
sectionProduct: number;
images: productImage[];
}

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
