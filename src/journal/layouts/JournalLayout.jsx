import { Box, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import { MainContent } from "../../ui/MainContent";
import Navbar from "../../ui/Navbar";
import SideBar from "../../ui/SideBar";

export const JournalLayout = ({ children }) => {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Header */}
      <Navbar setOpen={setOpen} open={open} />
      <SideBar setOpen={setOpen} open={open} />

      {/* main */}
      <MainContent setOpen={setOpen} open={open}>{children}</MainContent>
      {/* footer
      <Grid item xs={12}></Grid> */}
    </Box>
  );
};
