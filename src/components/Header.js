import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import logo from "../../public/amazon_PNG11.png";
import { Avatar, Link, TextField } from "@mui/material";
import Image from "next/image";
import { RoundaboutLeft } from "@mui/icons-material";

const Header = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      // backgroundColor='primary.bgColor'
    >
      <AppBar
        sx={{
          align: "center",
          backgroundColor: "primary.bgColor",
        }}
        position="static"
      >
        {/* public/amazon_PNG11.png'  */}
        <Toolbar>

          <Box sx={{ alignItems:'center', display:'flex'}}>
            <Image src={logo} width={150} height={60} alt="logo image" />
          </Box>

          {/* Search */}
          <Box
            sx={{
              display: "flex",
              backgroundColor: "primary.secondColor",
              flexGrow: 1,
              mx: "100px",
              borderRadius: "10px",
            }}
          >
            <TextField
              // label="Size"
              // id="outlined-size-small"
              placeholder="Amazon Search"
              size="small"
              style={{ width: "95%", borderLeft: "10px" }}
            />
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "primary.main",
                width: "5%",
              }}
            >
              <SearchIcon color="primary.iconColor"></SearchIcon>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              //  aria-controls={menuId}
              aria-haspopup="true"
              //  onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              //  aria-controls={mobileMenuId}
              aria-haspopup="true"
              //  onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </Box>
  );
};

export default Header;
