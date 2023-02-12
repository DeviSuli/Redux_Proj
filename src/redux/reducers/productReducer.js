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

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    case ActionTypes.CLEAR_STATE:
      console.log("dispatched");
      return initialState;
    default:
      return state;
  }
};
