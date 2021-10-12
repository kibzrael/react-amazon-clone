import React from "react";
import Item from "../item";

interface CartProps {}

interface CartState {
  items: Item[];
}

class Cart extends React.Component<CartProps, CartState> {
  state = {
    items: [],
  };
  render() {
    return (
      <div>
        <h2>Cart</h2>
      </div>
    );
  }
}

export default Cart;
