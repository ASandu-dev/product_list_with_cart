"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AddToCartButton from "./AddToCartButton";
import { useCart } from "./CartContext";

interface ImageVariants {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Props {
  id: number;
  image: ImageVariants;
  name: string;
  category: string;
  quantity:number;
  price: number;
}

const Product = ({ id, image, name, category, price, quantity }: Props) => {
  const { cart } = useCart();
  const isItemInCart = cart.some(item => item.id === id);

  return (
    <Box className="flex flex-col mt-8">
      <Image
        className="rounded-lg"
        src={image.desktop}
        alt="product image"
        width={240}
        height={240}
      />
      <AddToCartButton id={id} name={name} price={price} quantity={quantity} isItemInCart={isItemInCart} />
      <Box className="w-fit flex flex-col justify-between">
        <Typography variant="h4" className="text-[#260F08]">
          {category}
        </Typography>
        <Typography className="text-[#260F08] font-semibold">
          {name}
        </Typography>
        <Typography className="text-[#C73B0F] font-semibold">
          £{price.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Product;
