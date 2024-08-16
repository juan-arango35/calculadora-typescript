import { MenuItems, OrderItem } from "../types";
import { formatearPrecio } from "./helpers";

type OrderContensProps = {
  order: OrderItem[];
  deleteOrder:(id: MenuItems['id'])=> void
  
};

export default function Consumo({ order, deleteOrder }: OrderContensProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-5">
        {order.length === 0 ? (
          <p className="text-center">La orden esta vacia</p>
        ) : (
          order.map((pedido) => (
            <div
              key={pedido.id}
              className="flex justify-between border-t items-center  border-gray-300 py-5 last-of-type:border-b"
            >
              <div>
                <p className="mx-3 text-lg">
                  {pedido.name}-{formatearPrecio(pedido.price)}
                </p>
                <p className="mx-3 font-black">
                  cantidad: {pedido.cantidad}-
                  {formatearPrecio(pedido.price * pedido.cantidad)}
                </p>
              </div>
              <button className="bg-red-600 w-8 h-8 rounded-full text-white font-black mr-5" onClick={()=>deleteOrder(pedido.id)}>
                x
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
