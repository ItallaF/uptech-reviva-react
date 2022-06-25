import { createContext, ReactNode, useContext, useState } from "react";
import { listProduct } from '../datas/date';
import { ProductStock } from "../components/types/typeCart";

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

    return (
        <ProductsContext.Provider value={{ listproducts, setListproducts }}>
            {children}
        </ProductsContext.Provider>
    );
}

export const useProductContext = () => useContext(ProductsContext);