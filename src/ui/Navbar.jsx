import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { startLogout } from "../store/auth/thunks";

const drawerWidth = 240;

export const Navbar = ({ setMobileOpen, mobileOpen }) => {
  const dispatch = useDispatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${mobileOpen ? drawerWidth : 0}px)` },
          ml: { sm: `${mobileOpen ? drawerWidth : 0}px` },
        }}
        className="animate__animated animate__fadeInDown"
      >
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item sx={{ display: "displayFlex"}} alignItems="center">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Journal App
              </Typography>
            </Grid>
            <LogoutIcon color="error" cursor="pointer" onClick={onLogout} />
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
