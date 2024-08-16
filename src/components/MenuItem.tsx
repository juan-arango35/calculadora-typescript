import { MenuItems } from "../types";

type MenuItemProps = {
  item: MenuItems;
};

export const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <button className=" border-2 border-red-600 hover:bg-teal-300 w-full p-3 flex justify-between mb-3">
      <p>Name{item.name}</p>
      <p className="font-black">Precio{item.price}</p>
    </button>
  );
};
