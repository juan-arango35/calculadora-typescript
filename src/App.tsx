import { MenuItem } from "./components/MenuItem";
import { menuItems } from "./data/db";

function App() {
  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>
      <main className=" bg-slate-600 py-4 grid md:grid-cols-2">
        <div className=" bg-amber-400">
          <h2 className=" text-center text-4xl font-black mb-4">Menú</h2>
          {menuItems.map((item) => (
            <MenuItem key={item.id} 
            item= {item}
            />
          ))}
        </div>
        <div className=" bg-yellow-300">
          <h2 className=" text-center text-sm font-black">Consumo</h2>
        </div>
      </main>
    </>
  );
}

export default App;
