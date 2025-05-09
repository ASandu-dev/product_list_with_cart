"use client";
import React from "react";
import data from "./data/data.json";
import { Box, Container, Typography } from "@mui/material";
import Product from "./components/Product";
import Cart from "./components/Cart";

const Home = () => {
  return (
    <Container maxWidth="lg" className="my-8">
      <Typography variant="h1">Deserts</Typography>
      <Box className="flex">
        <Box className="flex flex-wrap justify-between">
          {data.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
        </Box>
        <Cart />
      </Box>
    </Container>
  );
};

export default Home;
