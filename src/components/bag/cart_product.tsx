import { productImage } from "../../pages/home/date";


type CartItens = {
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

export const cart: CartItens[] = [
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
