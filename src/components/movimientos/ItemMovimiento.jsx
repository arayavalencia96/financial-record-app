import { useGlobalState } from "../../context/GlobalState";

export default function ItemMovimiento({ movimiento }) {
  const { deleteMovimiento } = useGlobalState();
  return (
    <li className="bg-zink-500 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p>{movimiento.desc}</p>
      <span>${movimiento.monto}</span>
      <input
        type="button"
        value="Borrar"
        onClick={() => {
          deleteMovimiento(movimiento.id);
        }}
        className="bg-indigo-700 text-white px-1 py-1 rounded-lg block cursor-pointer"
      />
    </li>
  );
}
