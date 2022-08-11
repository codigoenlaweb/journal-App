import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Navbar from "../../ui/Navbar";
import { SideBar } from "../../ui/SideBar";

const drawerWidth = 240;

export const JournalLayout = ({ children }, props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
      <SideBar setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} window={window} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

JournalLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

// export default JournalLayout;

// <Box sx={{ display: 'flex' }}>
//   {/* Header */}
//   <Navbar setOpen={setOpen} open={open} />
//   <SideBar setOpen={setOpen} open={open} />

//   {/* main */}
//   <MainContent setOpen={setOpen} open={open}>{children}</MainContent>
//   {/* footer
//   <Grid item xs={12}></Grid> */}
// </Box>
