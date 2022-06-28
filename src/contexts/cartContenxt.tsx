import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { CartItens } from "../components/types/types";




interface ICartProvider {
    children: ReactNode;
}

interface ICartContext {
    ProductCart: CartItens[],
    setProductCart: (ProductCart: CartItens[]) => void,
}


export const CartContext = createContext<ICartContext>({ ProductCart: [], setProductCart: (ProductCart: CartItens[])=> []});
CartContext.displayName = "Cart";

export const CartProvider = ({ children }: ICartProvider) => {
    const [ProductCart, setProductCart] = useState<CartItens[]>([]);

    
    return (
        <CartContext.Provider value={{ ProductCart, setProductCart }}>
            {children}
        </CartContext.Provider>
    )
};

export function useCartContext() {
    const { ProductCart, setProductCart } = useContext(CartContext);

    const newQuanty = (id: number, quantityAvailable: number) =>
    ProductCart.map(item => {
        if(item.id === id) (item.quantityAvailable += quantityAvailable);
        return item;
    });

    function addProductCart(newProduct: CartItens) {
        const productInCart = ProductCart.some(item => item.id === newProduct.id);

        let newCart = [...ProductCart];
        if(!productInCart) {
            newProduct.quantityAvailable = 1;
            newCart.push(newProduct);
            return setProductCart(newCart);
        }
        newCart = newQuanty(newProduct.id, +1);
        setProductCart(newCart);
    };

    function removeProduct(id: number) {
        const product = ProductCart.find(item => item.id === id);
        const  lastProduct = product?.quantityAvailable === 1;
        let newCart
        if(lastProduct) {
            newCart = ProductCart.filter(item => item.id !== id);
            return setProductCart(newCart);
        }
        newCart = newQuanty(id, -1);
        setProductCart(newCart);        
    }
    
    return{
        ProductCart,
        setProductCart,
        newQuanty,
        removeProduct,
        addProductCart
    }
};
