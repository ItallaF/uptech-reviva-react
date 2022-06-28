import { render } from "@testing-library/react";
import { useCartContext } from "../../../contexts/cartContenxt";
import { ProductTest } from "../../listProduct/tests/ProductItemTest";
import ProductBag from "../product_cart";


describe("<ProductBag />", () => {
    test("Verificar as funções de adicionar", () =>{
        const { addProductCart } = useCartContext();
        render(<ProductBag />)
        const add = addProductCart(ProductTest);

        expect(add).toBeCalled();
    })
})