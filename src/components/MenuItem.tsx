import { MenuItems } from "../types";

type MenuItemProps = {
  item: MenuItems;
  addItem:(item: MenuItems) => void // estamos pasando una funcion- no retorna nada "void"
};

export const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button className=" border-2 rounded-xl border-red-600 hover:bg-teal-300 w-full p-3 flex justify-between mb-3"
    onClick={()=>addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">{item.price}</p>
    </button>
  );
};
