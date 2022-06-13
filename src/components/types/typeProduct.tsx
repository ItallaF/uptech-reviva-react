import { CartItens } from "./typeCart";

export interface Iproduct{
    map(arg0: (products: any) => JSX.Element): any;
    product?: String | null;
}