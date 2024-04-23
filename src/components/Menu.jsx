import React from "react";
import {useShoppingCart} from "../context/CartItemsContext";
import MenuItem from "../components/MenuItem";
import dataItems from "../data/items.json";
import formatCurreny from "./FormatCurrency";
const Menu = () => {
  const {cartItems} = useShoppingCart();
  const myMenuItems = cartItems.map((item) => <MenuItem key={item.id} {...item} />);
  const mytotal = formatCurreny(
    cartItems.reduce((total, currItem) => {
      let item = dataItems.find((i) => i.id === currItem.id);
      return total + item.price * +currItem.quantity;
    }, 0)
  );
  return (
    <div
      className="offcanvas offcanvas-end bg-light"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabIndex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
          Cart
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body flex-grow-0">{myMenuItems}</div>
      <div className="text-secondary-emphasis text-end fs-3 fw-bold mx-auto">
        Total : <span className="fs-5 fw-medium">{mytotal}</span>
      </div>
    </div>
  );
};

export default Menu;
