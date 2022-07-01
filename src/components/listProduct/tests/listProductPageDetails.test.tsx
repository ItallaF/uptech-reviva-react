import { Link, Router } from 'react-router-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from 'history';
import { ProductTest } from './ProductItemTest';


describe("<ProductList />", () => {
    test('Verificar se o o link ir para a página detalhes está funcionando corretamente', () => {
        const history = createMemoryHistory();
        history.push = jest.fn();
        
        render(
            <Router location={history.location} navigator={history}>
                <Link to={{
                    pathname: `/Details/${ProductTest.id}`
                }}>/Details/id</Link>
            </Router>,
        );

        fireEvent.click(screen.getByText(`/Details/id`));

        expect(history.push).toHaveBeenCalledWith(
            {
                hash: '',
                pathname: `/Details/${ProductTest.id}`,
                search: '',
            },
            undefined,
        );
    })
})