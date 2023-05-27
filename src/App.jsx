import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Calculo from "./components/Calculo";
import FormularioMovimiento from "./components/movimientos/FormularioMovimiento";
import ListaMovimientos from "./components/movimientos/ListaMovimientos";
import IngresosEgresos from "./components/IngresosEgresos";
import GraficoMovimientos from "./components/GraficoMovimientos";

export default function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-4/6">
          <div className="bg-zinc-800 p-10 rounded-lg ">
            <div className="flex justify-center">
              <Header />
            </div>
            <div className="flex gap-x-2">
              <div>
                <IngresosEgresos />
                <Calculo />
                <FormularioMovimiento />
              </div>
              <div className=" flex flex-col">
                <GraficoMovimientos />
                <ListaMovimientos />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}
