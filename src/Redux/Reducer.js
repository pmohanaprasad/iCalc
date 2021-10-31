import { Num1, OP, Num2, RES } from "./Action";

const ini = {
  Re: "",
  N1: "",
  N2: "",
  Opp: "",
};

function reducer(state = ini, action) {
  switch (action.type) {
    case RES:
      return {
        ...state,
        Re: action.payload,
      };
    case Num1:
      return {
        ...state,
        N1: action.payload,
      };
    case Num2:
      return {
        ...state,
        N2: action.payload,
      };
    case OP:
      return {
        ...state,
        Opp: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
