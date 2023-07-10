"use client";
import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";

// async function getCategories() {
//   const res = await fetch('http://localhost:1337/api/categories')
//   // console.log(res)
//   return res.json()
// }

function TopNav() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/categories");
      const jsonData = await response.json();
      setCategories(jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };
  const pages = ["Home", "Gadget", "Science", "Social", "Knowledge"];
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          variant="div"
          sx={{
            fontSize: {
              sx: "20px",
              sm: "26px",
            },
            paddingLeft: "15px",
            fontWeight: "bold",
          }}
        >
          Terminal Techno
        </Typography>
        <List
          dense
          sx={{
            display: "flex",
            padding: "0",
          }}
        >
          <ListItem disableGutters>
            <ListItemButton component={Link} href="/about">
              About
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton component={Link} href="/policy">
              Policy
            </ListItemButton>
          </ListItem>
        </List>
      </Stack>
      <Container
        disableGutters
        sx={{
          backgroundColor: "#016fbb",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        <AppBar
          component="nav"
          color="primary"
          position="relative"
          elevation={0}
        >
          <Toolbar variant="dense">
            <List
              disablePadding
              dense
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <ListItem disableGutters className="btn-nav-top">
                <ListItemButton component={Link} href="/">
                  Home
                </ListItemButton>
              </ListItem>
              {categories.map((cat) => (
                <ListItem
                  disableGutters
                  key={cat["id"]}
                  className="btn-nav-top"
                >
                  <ListItemButton
                    component={Link}
                    href={`/cat/${cat["attributes"]["slug"]}`}
                  >
                    {cat["attributes"]["name"]}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Drawer open={openDrawer} onClose={toggleDrawer} sx={{}}>
                <List
                  sx={{
                    minWidth: "200px",
                    height: "100vh",
                  }}
                >
                  {categories.map((cat) => (
                    <ListItem key={cat["id"]}>
                      <ListItemButton
                        component={Link}
                        href={`/cat/${cat["attributes"]["slug"]}`}
                      >
                        <ListItemText>{cat["attributes"]["name"]}</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  ))}
                  <Divider />
                  <ListItem>
                    <ListItemButton component={Link} href="/about">
                      About
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton component={Link} href="/policy">
                      Policy
                    </ListItemButton>
                  </ListItem>
                </List>
              </Drawer>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}

export default TopNav;
