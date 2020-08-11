export const packageReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "CLEAR":
      return {
        ...state,
        packages: [...state.response],
      };
    case "HIGHEST":
      return {
        ...state,
        packages: state.packages.sort(
          (a, b) => b.prices.final - a.prices.final
        ),
      };
    case "LOWEST":
      return {
        ...state,
        packages: state.packages.sort(
          (a, b) => a.prices.final - b.prices.final
        ),
      };
    case "INITIALIZE_STATE":
      return {
        ...state,
        response: action.payload,
        packages: [...action.payload],
      };
    default:
      return state;
  }
};
