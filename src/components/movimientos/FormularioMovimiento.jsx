import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

export default function FormularioMovimiento() {
  const [desc, setDesc] = useState("");
  const [monto, setMonto] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addMovimiento({
      id: window.crypto.randomUUID(),
      desc,
      monto: +monto,
    });
    setDesc("");
    setMonto(0);
  };

  const { addMovimiento } = useGlobalState();
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Descripción"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          className="bg-zink-600 text-white px-3 py-2 rounded-block mb-2 w-full"
        />
        <input
          type="number"
          placeholder="monto"
          step="0,01"
          onChange={(e) => setMonto(e.target.value)}
          value={monto}
          className="bg-zink-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <input
          type="submit"
          value="Añadir"
          disabled={!desc || !monto}
          className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full cursor-pointer"
        />
      </form>
    </div>
  );
}
