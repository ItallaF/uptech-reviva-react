import { useRecoilValue } from "recoil";
import { listProduct } from "../../../datas/date";
import {
    ButtonBag,
    ButtonBuy,
    ButtonImage,
    ButtonSvg,
    DetailsProducContent,
    DetailsProducContentTitle,
    ImageButtonSize,
    ProductDescription,
    ProductDescriptionImage,
    ProductImageDescription,
    ProductImageEdge
} from "./styles/styledProducContent";



export default function ProductContent() {
    const productCart = useRecoilValue(listProduct);

    return (
        <DetailsProducContent>
            <DetailsProducContentTitle>
                Camiseta reviva k22, Preta, R$ 39,90
            </DetailsProducContentTitle>
            <ProductDescription>
                Mauris scelerisque pharetra elit id consequat.
                In ut felis at metus ullamcorper dictum. Aenean neque nisi,
                cursus nec sollicitudin at, tempor id lectus. Donec et est
                ut ante eleifend tincidunt eu non odio. Curabitur fringilla
                neque et metus pretium, pulvinar mattis mauris tristique.
            </ProductDescription>
             <ProductDescriptionImage>
                <ProductImageEdge>
                    {/* <ProductImageDescription href="https://static.riachuelo.com.br/RCHLO/11535253001/portrait/ce9940bb577147616b4b1c0a4123b65de579911b.jpg?imwidth=700" alt="camiseta reviva, preta gola redonda" /> */}
                </ProductImageEdge>
                <ProductImageEdge>
                    {/* <ProductImageDescription href="https://static.riachuelo.com.br/RCHLO/11535253001/portrait/e5eef2037c058b5280e6f952004a6123aa3b8534.jpg?imwidth=700" alt="camiseta reviva, preta gola redonda" /> */}
                </ProductImageEdge>
                <ProductImageEdge>
                    {/* <ProductImageDescription href="https://static.riachuelo.com.br/RCHLO/11535253001/portrait/2dbe6cad5c3625c262e8bef2e33e1049dc25a74e.jpg?imwidth=700" alt="camiseta reviva, preta gola redonda" /> */}
                </ProductImageEdge>
                <ProductImageEdge>
                    {/* <ProductImageDescription href="https://static.riachuelo.com.br/RCHLO/11535253001/portrait/5500a4b3f1969caace4af54076a086be83591913.jpg?imwidth=700" alt="camiseta reviva, preta gola redonda" /> */}
                </ProductImageEdge>
            </ProductDescriptionImage>
            {/* <ButtonImage>
                <ImageButtonSize type="radio" name="P" >P</ImageButtonSize>
                <ImageButtonSize type="radio" name="M" >M</ImageButtonSize>
                <ImageButtonSize type="radio" name="G" >G</ImageButtonSize>
            </ButtonImage> */}
                <ButtonBuy >Por na Sacola
                    <ButtonSvg>
                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 5.98944C6 2.68134 8.68393 0 12 0C15.3161 0 18 2.68134 18 5.98944V8.55634H21.4286C22.8482 8.55634 24 9.7061 24 11.1232V22.2465C24 25.0808 21.6964 27.3803 18.8571 27.3803H5.14286C2.3025 27.3803 0 25.0808 0 22.2465V11.1232C0 9.7061 1.15125 8.55634 2.57143 8.55634H6V5.98944ZM8.57143 8.55634H15.4286V5.98944C15.4286 4.09902 13.8911 2.5669 12 2.5669C10.1089 2.5669 8.57143 4.09902 8.57143 5.98944V8.55634ZM7.28571 13.6901C7.99821 13.6901 8.57143 13.1179 8.57143 12.4067C8.57143 11.6954 7.99821 11.1232 7.28571 11.1232C6.57321 11.1232 6 11.6954 6 12.4067C6 13.1179 6.57321 13.6901 7.28571 13.6901ZM16.7143 11.1232C16.0018 11.1232 15.4286 11.6954 15.4286 12.4067C15.4286 13.1179 16.0018 13.6901 16.7143 13.6901C17.4268 13.6901 18 13.1179 18 12.4067C18 11.6954 17.4268 11.1232 16.7143 11.1232Z" fill="white" />
                        </svg>
                    </ButtonSvg>
                </ButtonBuy>
        </DetailsProducContent>
    );
}