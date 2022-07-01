import { fireEvent, render, screen } from "@testing-library/react";
import { ProductListButtonBag } from "../styledListProduct";

describe("<ProductList />", () => {
    test('Verificar se o Botão Por na sacola está adcionando os produtos', () =>{
        
        const addProductCart = jest.fn();
        render(<ProductListButtonBag onClick = {addProductCart}/>);
        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(addProductCart).toBeCalled();
    })
})