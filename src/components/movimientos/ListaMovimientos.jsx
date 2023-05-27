import { useGlobalState } from "../../context/GlobalState";
import ItemMovimiento from "./ItemMovimiento";

export default function ListaMovimientos() {
  const { movimientos } = useGlobalState();
  return (
    <>
      <ul>
        <h4 className="text-slate-300 text-xl font-bold block">Historial</h4>
        {movimientos.map((movimiento) => (
          <ItemMovimiento movimiento={movimiento} key={movimiento.id} />
        ))}
      </ul>
    </>
  );
}
