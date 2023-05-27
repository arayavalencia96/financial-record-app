import { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  movimientos: [],
};

export const Context = createContext();

/* Con la siguiente función se crea un CustomHook para usar el contexto 
en toda la app de una forma más optima */
// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalState = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useGlobalState must be used within a GlobalState");
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem("movimientos");
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("movimientos", JSON.stringify(state));
  }, [state]);

  const deleteMovimiento = (id) =>
    dispatch({
      type: "DELETE_MOVIMIENTO",
      payload: id,
    });

  const addMovimiento = (movimiento) =>
    dispatch({
      type: "ADD_MOVIMIENTO",
      payload: movimiento,
    });

  return (
    <Context.Provider
      value={{
        movimientos: state.movimientos,
        deleteMovimiento,
        addMovimiento,
      }}
    >
      {children}
    </Context.Provider>
  );
};
