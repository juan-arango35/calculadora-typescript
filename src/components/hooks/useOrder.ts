import { useState } from "react";
import { MenuItems, OrderItem } from "../../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0)

  function addItem(item: MenuItems) {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) {
      const updateOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, cantidad: orderItem.cantidad + 1 }
          : orderItem
      );
      setOrder(updateOrder);
    } else {
      const newItem: OrderItem = { ...item, cantidad: 1 };
      setOrder([...order, newItem]);
    }
  }

  function deleteOrder(id: MenuItems['id']){
    const updateOrder = order.filter((update)=>update.id !== id)
    setOrder(updateOrder)
  }
  return {
    order,
    tip,
    setTip,
    addItem,
    deleteOrder
  };
}
