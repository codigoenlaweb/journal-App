import { Grid, Typography } from "@mui/material";
import React from "react";

export const AuthLayout = ({children, title=""}) => {
  return (
    <Grid
      container
      spacing={0}
      className="p-4"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main" }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={11} sm={7} md={4} className="bg-white rounded shadow-xl p-4">
        <Typography variant="h5" className="">
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};