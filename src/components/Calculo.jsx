import { useGlobalState } from "../context/GlobalState";

export default function Calculo() {
  const { movimientos } = useGlobalState();
  const montos = movimientos.map((movimiento) => movimiento.monto);
  const montoTotal = montos.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="flex justify-between">
      <h5>Calculo</h5>
      <div className="text-2xl font-bold">${montoTotal}</div>
    </div>
  );
}
