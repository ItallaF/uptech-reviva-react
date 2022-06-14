import { atom, selector } from "recoil";
import { productImage, ProductStock } from "../postState";
import { CartItens } from "../types/typeCart";


export const listCarState = atom<CartItens[]>({
    key: 'listCartState',
    default:[
        {
            id: 0,
            nameProduct: 'Camiseta Basic Soft Preto',
            url: 'https://www.riachuelo.com.br/camiseta-basic-soft-11535253_sku',
            price: 39.90,
            description: 'A Camiseta Basic Soft Preto, é confeccionada em malha delicada. A peça possui tecido com leve transparência, tem modelagem assimétrica com parte frontal mais curta e acabamento sem costura. As blusas com corte à laser deixam o visual mais urbano e despojado. Combine com calças de sarja slim e tênis de alto para um visual cheio de estilo.',
            sizesAvailable: ['P', 'M', 'G'],
            quantity: 2,
            sectionProduct: 1,
            images: [
            { url: process.env.PUBLIC_URL + 'images/products/product01.webp',
              description: 'Camiseta Basic Soft Preto'
            }
          ],
        },
        {
          id: 1,
          nameProduct: 'Short Feminino Clochard Amarração Abstrato Preto',
          url: 'https://www.riachuelo.com.br/short-feminino-clochard-amarrac-o-abstrato-preto-ak-by-riachuelo-14418436_sku',
          price: 119.90,
          description: 'Ideal para compor looks elegantes e fresquinhos, o Short Feminino Clochard Amarração Abstrato Preto AK by Riachuelo é a escolha perfeita para você! Confeccionado em viscose, o short conta com padronagem abstrata e pode ser combinado com o kimono da mesma estampa criando um visual incrível! Inspire-se!',
          sizesAvailable: ['P', 'M', 'G'],
          quantity: 1,
          sectionProduct: 1,
          images: [
          { url: process.env.PUBLIC_URL + 'images/products/product02.webp',
            description: 'Short Feminino Clochard Amarração Abstrato Preto'
          }
            ],
          },
          {
          id: 2,
          nameProduct: 'Calça Feminina Pantalona Cintura Alta Amarração Linho',
          url: 'https://www.riachuelo.com.br/calca-feminina-pantalona-cintura-alta-amarrac-o-linho-folhagem-branco-ak-by-riachuelo-14419580_sku',
          price: 179.90,
          description: 'Trazendo o frescor do verão em sua estampa, este Calça Feminina Pantalona Cintura Alta Amarração Linho Folhagem Branco AK by Riachuelo é um toque de estilo e feminilidade. Confeccionado em viscose com linho, ele possui modelagem ampla, dando um toque de conforto ao seu look. Experimente combinar com o top cropped e kimono criando um visual elegante e fashionista!',
          sizesAvailable: ['P', 'M', 'G'],
          quantity: 1,
          sectionProduct: 1,
          images: [
          { url: process.env.PUBLIC_URL + 'images/products/product03.webp',
          description: 'Calça Feminina Pantalona Cintura Alta Amarração Linho '
        }
            ],
          }
        
    ]
});

export const stateCart = atom({
    key: 'cart',
    default: [{}]
});


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

export const updateQuantityCart = atom({
  key: 'updateQuantityCart',
  default: {
    quant: '',
  }
})
