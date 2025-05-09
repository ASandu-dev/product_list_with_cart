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
            className="w-full p-8"
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
            <Typography variant="h6" className="font-semibold text-[#260F08]">
              Total: £{grandTotal}
            </Typography>
            <Button
              variant="outlined"
              color="error"
              onClick={clearCart}
              className="ml-4"
            >
              Clear All
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
