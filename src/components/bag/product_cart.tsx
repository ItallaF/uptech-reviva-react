import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listProduct } from '../../datas/date';
import { MyBagButtonSize, MyBagButtonSizeInput, MyBagImage, MyBagImageProduct, MyBagProductDescription, MyBagProductPrice, MyBagProductTitle, MyBagQuantityProductValue, ProductMyBag } from './styledProductCart';
import { useParams } from 'react-router-dom';
import { NotFound } from '../../pages/NotFound/notFoud';



// export default function ProductBag(): any {
//     const productItem = useRecoilValue(listProduct);
//     const newQuanty = useSetRecoilState(listProduct);
//     const { id } = useParams();
//     const products = productItem.find(item => item.id === Number(id));

//     if (!products) {

//         return <NotFound />;

//     }
        
//     function handleChangeQuantity(id: number, quantityAvailable: number) {
//         const newQuantyProduct = productItem.map((item) => {
//             if (item.id === id) return ({ ...item, quantityAvailable })
//             return item
//         })
//         newQuanty(newQuantyProduct);
//     };


//     return (
//         productItem.map((products) =>
//             <ProductMyBag>
//                 <MyBagImage>
//                     <MyBagImageProduct src={products.images[0].url}></MyBagImageProduct>
//                 </MyBagImage>
//                 <div>
//                     <MyBagProductTitle>
//                         {products.nameProduct}
//                     </MyBagProductTitle>
//                     <MyBagProductDescription>
//                         {products.description}
//                     </MyBagProductDescription>
//                 </div>
//                 <div>
//                     <MyBagProductTitle>
//                         Tamanho escolhido
//                     </MyBagProductTitle>
//                     {products.sizesAvailable.map((t, index) => (
//                         <MyBagButtonSize key={index}>
//                             <MyBagButtonSizeInput type="radio" name="tamanho" value={products.sizesAvailable[index]} />
//                             {products.sizesAvailable[index]}
//                         </MyBagButtonSize>
//                     ))}
//                 </div>
//                 <div>
//                     <MyBagProductTitle>
//                         Valor
//                     </MyBagProductTitle>
//                     <MyBagProductPrice>
//                         R$ {products.price.toFixed(2).replace('.', ',')}
//                     </MyBagProductPrice>
//                 </div>
//                 <div>
//                     <MyBagProductTitle>
//                         Quantidade
//                     </MyBagProductTitle>
//                     <MyBagQuantityProductValue type="number" id={`${products.id}`} name={`${products.id}`}
//                         min={1} max={99} onChange={(e) =>
//                             handleChangeQuantity(products.id, +e.target.value)}
//                         value={products.quantityAvailable}
//                     />
//                 </div>
//                 <div>
//                     <MyBagProductTitle>
//                         Subtotal
//                     </MyBagProductTitle>
//                     <MyBagProductPrice>R$
//                         {(products.price * products.quantityAvailable).toFixed(2).replace('.', ',')}
//                     </MyBagProductPrice>
//                 </div>
//             </ProductMyBag>
//         )

//     );
// }

