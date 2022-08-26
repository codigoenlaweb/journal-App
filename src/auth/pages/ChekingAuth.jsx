import { CircularProgress, Grid } from "@mui/material";
import React from "react";

export const ChekingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems={"center"}
      justifyContent="center"
      sx={{ height: "100vh", width: "100%", backgroundColor: "primary.main" }}
    >
      <Grid item>
        <CircularProgress color="warning" />
      </Grid>
    </Grid>
  );
};
