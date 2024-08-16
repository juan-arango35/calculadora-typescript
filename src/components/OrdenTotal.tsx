import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatearPrecio } from "./helpers";

type OrderTotalProps={
    order: OrderItem[],
    tip: number
}

const OrdenTotal = ({order, tip}: OrderTotalProps) => {
    // creamos la funcion que vaa agregar el sutotal:
    const subTotalPropina=useMemo(()=>order.reduce( ( total, item)=> total + ( item.cantidad * item.price), 0 ), [order])
      
    // creamos el acumolado con porcentaje que viene de tipPorcentaje
    const tipAgregado = useMemo(()=>subTotalPropina * tip, [tip, order])

    

  return (
    <>
      <div className="space-y-3 px-4">
        <h2 className="font-black text-2xl">Total de Propinas</h2>
        <p>
          Subtotal a Pagar: <span className="font-bold">{formatearPrecio(subTotalPropina)}</span>{" "}
        </p>
        <p>
          Propina: <span className="font-bold">{formatearPrecio(tipAgregado)}</span>{" "}
        </p>
        <p>
          Total a Pagar <span className="font-bold">$/</span>{" "}
        </p>
      </div>
      <button>Calcular</button>
    </>
  );
};

export default OrdenTotal;
