import React from "react";
import items from "../data/items.json";
import formatCurreny from "./FormatCurrency";
import {useShoppingCart} from "../context/CartItemsContext";

const MenuItem = ({id, quantity}) => {
  const handleMyItem = items.filter((item) => item.id === id);
  const myItem = handleMyItem[0];
  const {removeItem} = useShoppingCart();
  return (
    <div className="card mb-3 flex-row" style={{maxWidth: "700px", height: "100px"}}>
      <div className="row g-0 w-100 ">
        <div className="col-4 h-100">
          <img src={myItem.imgUrl} className="img-fluid rounded-start w-100 h-100" alt="..." />
        </div>
        <div className="col-4">
          <div className="card-body px-1">
            <h6 className="card-title">
              {myItem.name}
              <span className="text-body-secondary" style={{fontSize: "12px"}}>
                {" "}
                x{quantity}
              </span>
            </h6>
            <p className="card-text">
              <small className="text-body-secondary">{formatCurreny(myItem.price)}</small>
            </p>
          </div>
        </div>
        <div className="col-4">
          <div className="card-body d-flex align-items-center justify-content-end h-100">
            <h6 className="card-title mb-0">{formatCurreny(myItem.price * quantity)}</h6>
            <button
              className="btn btn-outline-danger ms-1 d-flex justify-content-center align-items-center fs-3 pb-2"
              style={{width: "25px", height: "25px"}}
              onClick={() => removeItem(id)}
            >
              &times;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
