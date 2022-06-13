import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { listProduct } from "../../pages/home/date";
import { listCarState } from './listCartState';


export default function ContrlCart(){
    const productCart = useRecoilValue(listCarState);
    const [productList, setProductList] = useState(listProduct);

    //const [cart, setCart] = useState<CartItens[]>([]);

    // useEffect(() =>{
    //     console.log(cart)
    // }, [cart])
    
    const handleAddUnitCart = ({ id }: any) => {
        const item = productList.find((item) => item.id === id);
        if(item && item?.quantityAvailable > 0){
            const quantityAvailableCurrent  = item?.quantityAvailable + 1;
            const quantityCurrent = quantityAvailableCurrent;

            // if(productCart.find((item) => item.id === id)){
            //     const addToCart = productCart.map((item) => {
            //         if(item.id === id) return ({...item, quantity: item.quantity + 1})
            //         return item
            //     })
            //     setCart(addToCart);
            // }else{
            //     cart.push({id, nameProduct, url, price, description, sizesAvailable, quantity: 1, sectionProduct, images})
            // }
        }
    }
    
    const handleSubtractUnitCart = ({id}: any) =>{
        // const isItemInCart = cart.find((item) => item.id === id);
        // if(isItemInCart && isItemInCart.quantity > 1){
        //     const substarctCart = cart.map((item) => {
        //         if(item.id === id) return ({...item, quantity: item.quantity - 1})
        //         else return item;
        //     })
        //     setCart(substarctCart);
        // }else{
        //     const substarctCart = cart.filter((item) => {
        //         if(item.id === id) return true;
        //         else return false;
        //     })
        //     setCart(substarctCart);
        // }
    }
}