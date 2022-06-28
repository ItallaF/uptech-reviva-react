import { render, screen } from '@testing-library/react'
import ProductBag from '../components/bag/product_cart'
import { useCartContext } from './cartContenxt'

jest.mock('./cartContenxt', () => {
    return {
        useCartContext: jest.fn()
    }
})

describe("<useCartContext />", () => {
    beforeEach(() => {
        (useCartContext as jest.Mock).mockReturnValue([])
    })
    test("Verificar se há uma lista vazia de produtos no context", () => {
        render(<ProductBag />)
        const ProductCart = screen.queryAllByRole('ProductCart')
        expect(ProductCart).toHaveLength(0)
    })
})