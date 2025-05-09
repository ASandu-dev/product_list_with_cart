"use client";
import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { useCart } from "./CartContext";

interface Props {
  isItemInCart: boolean;
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const AddToCartButton = ({ id, name, price, isItemInCart }: Props) => {
  const { addItem, updateQuantity, cart } = useCart();

  const quantity = cart.find(item => item.id === id)?.quantity || 0;

  return (
    <Box
      className={`
  ${
    isItemInCart
      ? "border-none bg-[#C73B0f] text-white"
      : "border border-[#AD8A85] bg-white text-[#260F08]"
  }
  flex py-2 justify-center text-sm font-semibold rounded-full w-4/5 self-center relative bottom-5
`}
    >
      {isItemInCart ? (
        <Box className="flex justify-between w-full px-4">
          <button className="bg-transparent border-white px-1.5 border-1 rounded-2xl"
          onClick={() => updateQuantity(id, quantity - 1)}>-</button>
          {quantity}
          <button className="bg-transparent border-white px-1.5 border-1 rounded-2xl"
          onClick={() => updateQuantity(id, quantity + 1)}>+</button>
        </Box>
      ) : (
        <button className="flex" onClick={() => addItem({ id, name, price, quantity: 1 })}>
          <Image
            src="/assets/images/icon-add-to-cart.svg"
            alt="cart"
            width={16}
            height={16}
            className="mr-2"
          />
          Add to Cart
        </button>
      )}

    </Box>
  );
};

export default AddToCartButton;
