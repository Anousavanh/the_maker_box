"use client";
import Link from "next/link";
import React from "react";
import MainLogo from "public/navbar.png";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";


const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About Us",
    url: "/about",
  },
  {
    id: 3,
    title: "Moments",
    url: "/moments",
  },
  {
    id: 4,
    title: "Events",
    url: "/events",
  },
  {
    id: 5,
    title: "Space",
    url: "/space",
  },
  {
    id: 6,
    title: "Contact Us",
    url: "/contact",
  },
  // {
  //     id: 7,
  //     title: "Dashboard",
  //     url: "/",
  // },
];


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#222"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href="/">
              <Image src={MainLogo} alt="main_logo" width={150} height={150} />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {links.map((link) => (
              <Button
                key={link.id}
                href={link.url}
                sx={{
                  my: 2,
                  color: "white",
                  p: "0px 20px",
                  "&:hover": {
                    color: "#03BCA3",
                  },
                }}
              >
                {link.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {links.map((link) => (
                <MenuItem key={link.id} onClick={handleCloseNavMenu}>
                  <Link href={link.url}>
                    <Typography textAlign="center">{link.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
