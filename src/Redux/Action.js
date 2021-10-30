export const RES = "RES";
export const Num1 = "Num1";
export const Num2 = "Num2";
export const OP = "OP";

export const res = (payload) => ({
  type: RES,
  payload,
});

export const num1 = (payload) => ({
  type: Num1,
  payload,
});

export const num2 = (payload) => ({
  type: Num2,
  payload,
});

export const op = (payload) => ({
  type: OP,
  payload,
});
