export const api =  {
    getProducts: () =>{
        return fetch('http://localhost:8080/datas/listProducts').then(response => response.json());
    }
}