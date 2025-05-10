"use client";
import React from "react";
import data from "./data/data.json";
import { Box, Container, Typography } from "@mui/material";
import Product from "./components/Product";
import Cart from "./components/Cart";

const Home = () => {
  return (
    <Container maxWidth="lg" className="my-8 flex flex-col items-center">
      <Typography variant="h1">Deserts</Typography>
      <Box className="flex flex-col sm:flex-row">
        <Box className="flex flex-wrap justify-center sm:justify-between">
          {data.map((item) => {
            return <Product quantity={0} key={item.id} {...item} />;
          })}
        </Box>
        <Cart />
      </Box>
    </Container>
  );
};

export default Home;
