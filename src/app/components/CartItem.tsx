"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useCart } from "./CartContext";
import Image from "next/image";

interface Props {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CartItem = ({ id, name, price, quantity }: Props) => {
  const { removeItem } = useCart();
  const totalPrice = (price * quantity).toFixed(2);
  return (
    <Box className="flex border-b-[#F5EEEc] border-b-2">
      <Box className="flex-[90%]">
        <Box>
          <Typography className="text-[#260F08] text-sm">{name}</Typography>
        </Box>
        <Box className="flex justify-between">
          <Box className="flex justify-start flex-1/2">
            <Typography className="text-[#C73B0F] pr-4">{quantity}x</Typography>
            <Typography className="text-[#c9aea6] pr-4">@ £{price}</Typography>
            <Typography className="text-[#87635a]">£{totalPrice}</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        className="flex justify-center flex-[20%]"
        onClick={() => removeItem(id)}
      >
        <Image
          src="./assets/images/icon-remove-item.svg"
          alt="alt"
          width={32}
          height={32}
          className="text-[#AD8A85] border-2 rounded-4xl px-2 flex justify-center items-center"
        ></Image>
      </Box>
    </Box>
  );
};

export default CartItem;
