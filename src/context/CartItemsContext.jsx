import {createContext, useContext, useEffect, useState} from "react";

const CartItemsContext = createContext({});

const initialCartItems = localStorage.getItem("shopping-cart") ? JSON.parse(localStorage.getItem("shopping-cart")) : [];

const ShoppingCartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const getQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, {id, quantity: 1}];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + 1};
          } else return item;
        });
      }
    });
  };
  const deCreaceQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id).quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) return {...item, quantity: item.quantity - 1};
          else return item;
        });
      }
    });
  };
  const removeItem = (id) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };
  useEffect(() => localStorage.setItem("shopping-cart", JSON.stringify(cartItems)), [cartItems]);
  return (
    <CartItemsContext.Provider value={{cartItems, getQuantity, increaseQuantity, deCreaceQuantity, removeItem}}>
      {children}
    </CartItemsContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(CartItemsContext);
};
