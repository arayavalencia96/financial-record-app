/* eslint-disable react-refresh/only-export-components */
export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIMIENTO":
      return { ...state, movimientos: [action.payload, ...state.movimientos] };
    case "DELETE_MOVIMIENTO":
      return {
        ...state,
        movimientos: state.movimientos.filter(
          (movimiento) => movimiento.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
