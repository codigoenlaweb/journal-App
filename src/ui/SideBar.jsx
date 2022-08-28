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
import { useDispatch, useSelector } from "react-redux";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { setActiveNotes } from "../store/journal/journalSlice";

const drawerWidth = 240;

export function SideBar({ setMobileOpen, mobileOpen, window }) {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.journal);
  const { displayName } = useSelector((state) => state.auth);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const onActivate = (title, date, id, body, imageUrls) => {
    dispatch(setActiveNotes({ title, date, id, body, imageUrls }));
  };

  const drawer = (
    <div>
      <Typography variant="h6" color={"secondary.main"} className="py-4 px-4">
        {displayName}
      </Typography>
      <Divider />
      <List>
        {notes.map(({ title, date, id, body, imageUrls }) => (
          <ListItem
            key={id}
            onClick={() => onActivate(title, date, id, body, imageUrls)}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                <BookmarksIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  title
                    ? title.length > 18
                      ? `${title.substring(0, 18)}...`
                      : title
                    : "No title"
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: mobileOpen ? drawerWidth : 0 },
        flexShrink: { sm: 0 },
      }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="temporary"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
