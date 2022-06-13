import { atom } from "recoil";
import { CartItens } from "../types/typeCart";
import { Iproduct } from "../types/typeProduct";


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
    ]
})

export const filterProducts = atom<Iproduct>({
    key: 'filterProducts',
    //default: {}
})