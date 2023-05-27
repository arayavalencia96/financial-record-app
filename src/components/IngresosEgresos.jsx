import { useGlobalState } from "../context/GlobalState";

export default function IngresosEgresos() {
  const { movimientos } = useGlobalState();
  const montos = movimientos.map((movimiento) => movimiento.monto);
  const ingresos = montos
    .filter((monto) => monto > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const egresos = (
    montos.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div>
      <div className="flex justify-between my-2">
        <h6>Ingresos</h6>
        <div>${ingresos}</div>
      </div>
      <div className="flex justify-between my-2">
        <h5>Egresos</h5>
        <div>${egresos}</div>
      </div>
    </div>
  );
}
