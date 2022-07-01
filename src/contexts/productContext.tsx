import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { listProduct } from '../datas/date';
import { ProductStock } from "../components/types/types";

interface IProductProvider {
    children: ReactNode;
}

interface IProductContext {
    listproducts: ProductStock[],
    setListproducts?: (listproducts: ProductStock[]) => void;
}

export const ProductsContext = createContext<IProductContext>({ listproducts: [] });
    ProductsContext.displayName = "Products";

export const ProductProvider = ({ children }: IProductProvider) => {
    const [listproducts, setListproducts] = useState<ProductStock[]>(listProduct);

    useEffect(()=>{
        setListproducts(listProduct);
    },[]);

    return (
        <ProductsContext.Provider value={{ listproducts, setListproducts }}>
            {children}
        </ProductsContext.Provider>
    );
}

export const useProductContext = () => useContext(ProductsContext);