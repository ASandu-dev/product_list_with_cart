"use client";
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useCart } from "./CartContext";


interface Props {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const CartItem = ({ id, name, price, quantity}:Props) => {
    const { removeItem } = useCart();
  const totalPrice = (price * quantity).toFixed(2);
  return (
    <Box className="border-b-[#F5EEEc] border-b-2">
        <Box className="w-full flex justify-end "><button className='text-[#AD8A85]'
        onClick={() => removeItem(id)}>Clear all</button></Box>
        
        <Box>
            <Typography className="text-[#260F08] text-sm">
                {name}
            </Typography>
            <Box className="flex justify-between">
                <Typography className='text-[#C73B0F]'>{quantity}</Typography>
                <Typography className='text-[#C73B0F]'>@£{price}</Typography>
                <Typography className='text-[#C73B0F]'>{totalPrice}</Typography>
            </Box>
        </Box>
        
    </Box>
  )
}

export default CartItem