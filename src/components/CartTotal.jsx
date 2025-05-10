import React, { useContext } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, shippingCost, getCartAmount } = useContext(Shopcontext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"Cart"} text2={"Totals"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Cost</p>
          <p>
            {currency} {shippingCost}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + shippingCost}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
