import { render, screen } from "@testing-library/react";
import SearchForm from "./searchForm";


describe("<SearchForm />", () => {
    test('Verifica se o input está aceitando dados para a pesquisa', () => {
        render(<SearchForm />)

        const input = screen.getByPlaceholderText('Faça sua busca aqui se já souber o que está procurando');

        const button = screen.getByRole('button');

        expect(input).toBeInTheDocument();

        expect(button).toBeEnabled();
    })
});