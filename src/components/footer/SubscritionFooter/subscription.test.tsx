import { fireEvent, render, screen } from "@testing-library/react";
import Subscription from "./subscription";

describe("<Subscription />", () => {
    test('Verifica o comportamento do formulário de inscrição do rodapé se os componentes está habilitado', () => {
        render(<Subscription />)

        const input = screen.getByPlaceholderText('Assine o newsletter');

        const button = screen.getByRole('button');

        fireEvent.change(input, {

            target: {

                value: 'italla@gmail.com'

            }
        });

        expect(input).toBeInTheDocument();

        expect(button).toBeEnabled();

        fireEvent.click(button);
    })
})