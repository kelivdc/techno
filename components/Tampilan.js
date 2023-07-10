"use client";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
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
  grid: {
    breakpoints: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1040,
      xl: 1536,
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
        <Box component="main" pt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              {children}
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{
                backgroundColor: "#f0f0f0"
              }}>
                Kanan
                </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Tampilan;
