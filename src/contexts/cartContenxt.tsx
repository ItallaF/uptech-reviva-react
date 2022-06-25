import { createContext, useState } from "react";



// export const CartContext = createContext();
// CartContext.displayName = "Cart";

// export const CartProvider = ({ childrem }: any) => {
//     const [cart, setCart] = useState([]);
//     const [quantyProduct, setQuantyProduct] = useState(0);
//     const [total, setTotal] = useState(0);

//     return (
//         <CartContext.Provider
//             value={{
//                 cart,
//                 setCart,
//                 quantyProduct,
//                 setQuantyProduct,
//                 total,
//                 setTotal
//             }}>
//                 {childrem}
//         </CartContext.Provider>
//     )
// };