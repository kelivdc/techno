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
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";

function TopNav() {
  useEffect(() => {
    console.log("Ready");
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
        <Box>
          <List
            
            disableGutters
            sx={{
              display: "flex",
              padding: "0",
            }}
          >
            <ListItem disableGutters>
              <ListItemButton component="a">About</ListItemButton>
            </ListItem>
            <ListItem disableGutters>
            <ListItemButton component="a">Policy</ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Stack>
      <Container
        disableGutters
        disablePadding
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
          disableGutters          
          disablePadding
        >
          <Toolbar disableGutters variant="dense">
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
              {pages.map((page) => (
                <ListItem disableGutters key={page}>
                  <ListItemButton component="a">{page}</ListItemButton>
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
                  {pages.map((page) => (
                    <ListItem disablePadding key={page}>
                      <ListItemButton>
                        <ListItemText>{page}</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  ))}
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemButton component="a">About</ListItemButton>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a">Policy</ListItemButton>
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
