export type MenuItems ={
    id: number,
    name: string,
    price: number
}


//esto agrega MenuItem y adiciona cantidad para usarse en ele custom hooks
export type OrderItem = MenuItems & {
    cantidad: number,
}