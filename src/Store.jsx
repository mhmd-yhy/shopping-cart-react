import React from "react";
import StoreItem from "./components/StoreItem";
import data from "./data/items.json";
const Store = () => {
  const myDatas = data.map((cart) => <StoreItem key={cart.id} {...cart} />);
  return (
    <div className="container">
      <h2>Store</h2>
      <div className="text-center">
        <div className="row justify-content-center justify-content-lg-start align-items-center">{myDatas}</div>
      </div>
    </div>
  );
};

export default Store;
