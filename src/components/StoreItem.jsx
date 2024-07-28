import React from "react";
import formatCurreny from "./FormatCurrency";
import {useShoppingCart} from "../context/CartItemsContext";

const StoreItem = ({id, name, price, imgUrl}) => {
  const {getQuantity, increaseQuantity, deCreaceQuantity, removeItem} = useShoppingCart();
  return (
    <div className="col-12 col-md-5 col-lg-4 mt-4">
      <div className="card p-0">
        <img src={imgUrl} className="card-img-top" alt="..." style={{objectFit: "cover", height: "200px"}} />
        <div className="card-body">
          <div className="card-title d-flex justify-content-between align-items-center">
            <h5>{name}</h5> <span>{formatCurreny(price)}</span>
          </div>
          <div className="card-body p-0">
            {getQuantity(id) !== 0 ? (
              <div>
                <div className="d-flex justify-content-evenly align-items-center">
                  <button type="button" className="btn btn-primary" onClick={() => deCreaceQuantity(id)}>
                    -
                  </button>
                  <span className="fs-2">{getQuantity(id)} in cart</span>
                  <button type="button" className="btn btn-primary" onClick={() => increaseQuantity(id)}>
                    +
                  </button>
                </div>
                <button type="button" className="btn btn-danger mt-1" onClick={() => removeItem(id)}>
                  Remove
                </button>
              </div>
            ) : (
              <button type="button" className="btn btn-primary mt-1 w-100" onClick={() => increaseQuantity(id)}>
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
