"use client";
import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from "@mui/material";
import Image from "next/image";
import { useCart } from "./CartContext"; // Import the useCart hook to access context
import { Typography } from "@mui/material";

interface OrderConfirmedModalProps {
  open: boolean;
  onClose: () => void;
  grandTotal: string;
}

const OrderConfirmedModal = ({
  open,
  onClose,
  grandTotal,
}: OrderConfirmedModalProps) => {
  const { cart, clearCart } = useCart();

  return (
    <Dialog open={open} onClose={onClose}>
        <Image src={"./assets/images/icon-order-confirmed.svg"} alt="order confirmed" width={35} height={35}
                className="m-4"
        ></Image>
      <DialogTitle>Order Confirmed</DialogTitle>
      <DialogContent>
        <Box>
          <Typography variant="h4" gutterBottom className="pb-4">
            We hope you enjoy your food!
          </Typography>
        
          <Box className="bg-[#f4edeb] rounded-sm p-8">
            {cart.map((item) => {
              console.log("Item Image:", item.image); // ✅ valid
              return (
                <Box key={item.id} className="flex justify-between py-1">
                  <Box className="flex items-center">
                    <Image
                      src={`./${item.image.desktop}`}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="my-4"
                    />
                  </Box>
                  <Box className="flex w-full pl-4 justify-between items-center">
                    <Box className="mr-28">
                      <Typography className="ml-2">{item.name}</Typography>
                      <Typography className="text-[#C73B0F]">
                        {item.quantity}x @£{item.price.toFixed(2)}
                      </Typography>
                    </Box>
                    <Typography className="text-[#C73B0F] ml-8">
                      £{(item.quantity * item.price).toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
            <Box className="flex justify-between items-center border-t border-gray-200 mt-4 pt-4">
              <Typography
                variant="subtitle2"
                className="font-semibold text-[#260F08]"
              >
                Order Total:
              </Typography>
              <Typography variant="h6" className="font-semibold text-[#260F08]">
                £{grandTotal}
              </Typography>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box className="flex w-full mt-4 justify-center">
          <Box
            onClick={() => {
              clearCart();
              onClose();
            }}
            className="flex justify-center w-full mx-4 rounded-4xl text-white font-semibold bg-[#C73B0f] py-3 mb-8"
          >
            Start New Order
          </Box>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default OrderConfirmedModal;
