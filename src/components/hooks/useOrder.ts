import { useState } from "react";
import { MenuItems, OrderItem } from "../../types";


export default function useOrder (){
    const [Order, setOrder] = useState<OrderItem[]>([])
  
    function addItem(item: MenuItems){
        console.log(item)
    }
 
    return {
        addItem
    }
}