"use client";
import { createTheme } from '@mui/material'
const theme = createTheme({
    palette:{
        mode: "light",
    },
    typography: {
        fontFamily: "var(--font-redhat-text), sans-serif",
        h1: {
            fontSize: "3rem",
            fontWeight: "600",
        },
        h3:{
            fontSize:"1.5rem",
            fontWeight: "600",
        },
        h4: {
            fontSize: "0.875rem",
            fontWeight: "300"
        },
        h6: {
            fontSize: "1.5rem",
            fontWeight: "700",
        }
    },
});

export default theme;