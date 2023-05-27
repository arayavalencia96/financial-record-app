import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";
import { BsPieChartFill } from "react-icons/bs";
export default function GraficoMovimientos() {
  const { movimientos } = useGlobalState();
  const montos = movimientos.map((movimiento) => movimiento.monto);
  const totalIngresos = montos
    .filter((monto) => monto > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const totalEgresos = (
    montos.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  const egresosPercentage = Math.round((totalEgresos / totalIngresos) * 100);
  const ingresosPercentage = 100 - egresosPercentage;

  if (totalIngresos === 0 && totalEgresos === 0) {
    return (
      <div className="bg-zinc-900 p-4 my-2">
        <div className="h-full flex items-center justify-center w-full flex-col">
          <BsPieChartFill className="text-9xl" />
          <h1 className="text-3xl font-bold my-2">Sin datos</h1>
        </div>
      </div>
    );
  }
  return (
    <VictoryPie
      colorScale={["navy", "#e74c3c"]}
      animate={{ duration: 2000 }}
      labels={({ datum }) => `${datum.y}%`}
      data={[
        { x: "Ingresos", y: ingresosPercentage },
        { x: "Egresos", y: egresosPercentage },
      ]}
      labelComponent={
        <VictoryLabel key={2} angle={45} style={{ fill: "white" }} />
      }
      innerRadius={100}
      labelRadius={({ innerRadius }) => innerRadius + 5}
    />
  );
}
