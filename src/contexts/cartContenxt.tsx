import { createContext, ReactNode, useContext, useState } from "react";
import { CartItens } from "../components/types/typeCart";



interface ICartProvider {
    children: ReactNode;
}

interface ICartContext {
    ProductCart: CartItens[],
    setProductCart?: (ProductCart: CartItens[]) => void,
    // quantyProduct: Number,
    // setQuantyProduct?: (quantyProduct: Number) => void;
}


export const CartContext = createContext<ICartContext>({ ProductCart: [] });
CartContext.displayName = "Cart";

export const CartProvider = ({ childrem }: any) => {
    const [ProductCart, setProductCart] = useState<CartItens[]>([]);
    const [quantyProduct, setQuantyProduct] = useState(0);
    const [total, setTotal] = useState(0);

    return (
        <CartContext.Provider value={{ ProductCart, setProductCart }}>
            {childrem}
        </CartContext.Provider>
    )
};

export const useCartContext = () => {
    const { ProductCart, setProductCart } = useContext(CartContext);

    function addProductCart(newProduct: CartItens) {
        const productInCart = ProductCart.some(item => item.id === newProduct.id);
        if(!productInCart) {
            newProduct.quantity = 1;
            // return setProductCart(cartPrior => [...cartPrior, newProduct]);
        }
    }
};