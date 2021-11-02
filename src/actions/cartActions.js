import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING } from './action-types/cartActions'

//add cart action
export const addToCart = (id) => {
  // Add code here
  console.log("ACTION", id);
  return {
    type: ADD_TO_CART,
    payload : id,
  };
};
//remove item action
export const removeItem = (id) => {
  // Add code here
};
//subtract qt action
export const subtractQuantity = (id) => {
  // Add code here
};
//add qt action
export const addQuantity = (id) => {
  // Add code here
};

// OPTIONAL, NOT MANDATORY
export const addShipping = () => {
  // Add code here
};

export const substractShipping = () => {
  // Add code here
};
