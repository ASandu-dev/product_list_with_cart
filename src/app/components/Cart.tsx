"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useCart } from "./CartContext";
import CartItem from "./CartItem"; // make sure this is properly capitalized and imported

const Cart = () => {
  const { cart, clearCart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const grandTotal = cart
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2);

  return (
    <Box className="bg-white w-[60vw] relative bottom-12 ml-4 rounded-2xl">
      <Typography variant="h6" className="text-[#C73B0f] p-4">
        Your Cart ({totalItems})
      </Typography>

      {cart.length === 0 ? (
        <Box className="flex flex-col items-center">
          <Image
            className="w-full  p-8"
            src={"./assets/images/illustration-empty-cart.svg"}
            alt="empty cart"
            width={250}
            height={250}
          />
          <Typography>Your added items will appear here</Typography>
        </Box>
      ) : (
        <>
          <Box className="flex flex-col gap-4 p-4">
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Box>
          <Box className="flex flex-col items-end p-4 border-t border-gray-200">
            <Typography
              onClick={clearCart}
              className="ml-4 text-[#c9aea6]"
            >
              Clear All
            </Typography>
            <Box className="flex justify-between items-center w-full">
            <Typography variant="subtitle2" className="font-semibold text-[#260F08]">
              Order Total:
            </Typography>
            <Typography variant="h6" className="font-semibold text-[#260F08]">
              £{grandTotal}
            </Typography>
            </Box>
          </Box>
          <Box className='flex items-center py-4 mx-4 rounded-lg justify-center bg-[#f4edeb]'>
            <Image className="p-1" src={"./assets/images/icon-carbon-neutral.svg"} alt="carbon neutral" width={32} height={32}></Image>
            <Typography variant="subtitle2">This is a <strong>carbon-neutral</strong> delivery</Typography>
            </Box>
            <Box className="flex w-full mt-4 justify-center">
          <button
          className="w-full mx-4 rounded-4xl text-white font-semibold bg-[#C73B0f] py-2"
          >Confirm Order</button>  
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
