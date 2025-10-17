export interface Product{
    id:number,
    title:string,
    description: string,
    price:number,
    rating: number,
    brand: string,
    category:string,
    images:[],
    availabilityStatus: string,
}

export interface CartItem extends Product{
    quantity:number,
    totalPrice:number
}