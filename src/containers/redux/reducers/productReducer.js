import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      title: "Dish",
      category: "programmer",
    },
  ],
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
