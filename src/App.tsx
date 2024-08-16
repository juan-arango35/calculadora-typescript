import { MenuItem } from "./components/MenuItem";
import { menuItems } from "./data/db";
import useOrder from "./components/hooks/useOrder";
import Consumo from "./components/Consumo";
import OrdenTotal from "./components/OrdenTotal";
import TipPorcentaje from "./components/TipPorcentaje";

function App() {
  const { order, addItem, deleteOrder, tip, setTip, guardarOrden } = useOrder();
  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>
      <main className=" bg-slate-600 py-4 grid md:grid-cols-2">
        <div className="bg-slate-200  max-w-full pl-3 ">
          <h2 className=" text-center text-4xl font-black mb-4">Menú</h2>
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} addItem={addItem} />
          ))}
        </div>
        <div className="bg-slate-200">
          {order.length ?(
              <>
                <Consumo order={order} deleteOrder={deleteOrder} />
                <TipPorcentaje setTip={setTip} tip={tip} />
                <OrdenTotal
                  order={order}
                  tip={tip}
                  guardarOrden={guardarOrden}
                />
              </>
            ): (
              <p className="text-center"> La orden esta vacia </p>
            )}
        </div>
      </main>
    </>
  );
}

export default App;
