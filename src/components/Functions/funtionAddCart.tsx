import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { listProduct } from "../../datas/date";
import { addToCart } from "../bag/FunctionsCart/addPtoduct_cart";
import { stateCart } from "../bag/StateCart/listCartState";
import { decrementStock } from "../listProduct/functionStock";
import { ProductStock } from "../types/typeCart";


// export default function HandleAdd(product: ProductStock) {
//     const [productInStock, setProductInStock] = useRecoilState(listProduct);
//     const [cart, setCart] = useRecoilState(stateCart);
//     const navigate = useNavigate();


//     const newCart = addToCart(cart, product);
//     setCart(newCart);
//     navigate(`/Cart/${product.id}`, { state: { product }, replace: true });

//     console.log(productInStock, product);
//     const newProduct = decrementStock(productInStock, product);
//     setProductInStock(newProduct);
// }

