import { MenuItem } from "./components/MenuItem";
import { menuItems } from "./data/db";
import useOrder from "./components/hooks/useOrder";
import Consumo from "./components/Consumo";
import OrdenTotal from "./components/OrdenTotal";
import TipPorcentaje from "./components/TipPorcentaje";

function App() {

  const {order, addItem, deleteOrder, tip, setTip} = useOrder()
  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>
      <main className=" bg-slate-600 py-4 grid md:grid-cols-2">
        <div className=" bg-amber-400 max-w-full pl-3 ">
          <h2 className=" text-center text-4xl font-black mb-4">Menú</h2>
          {menuItems.map((item) => (
            <MenuItem key={item.id} 
            item= {item}
            addItem={addItem}
            
            />
          ))}
         
        </div>
        <div className=" bg-yellow-300">
          <Consumo
          order={order}
          deleteOrder={deleteOrder}
          />
          <TipPorcentaje
          setTip={setTip}
          />
          <OrdenTotal
           order={order}
           tip={tip}
          />
        </div>
      </main>
    </>
  );
}

export default App;
