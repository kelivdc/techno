"use client";
import {
  Box,
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import TopNav from "./TopNav";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1040,
      xl: 1536,
    },
  },
  typography: {
    fontSize: 14,
    body1: {
      fontFamily: "Mulish",
    },
  },
  palette: {
    primary: {
      main: "#016fbb",
    },
  },
});
function Tampilan({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        disableGutters
        sx={{
          backgroundColor: "#ffffff",
          color: "#333333",
        }}
      >
        <TopNav />
        {children}
      </Container>
    </ThemeProvider>
  );
}

export default Tampilan;
