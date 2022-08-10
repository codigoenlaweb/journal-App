import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <TextField
              type="text"
              id="fullName"
              label="Full name"
              variant="outlined"
              fullWidth
              color="secondary"
              sx={{ marginTop: "1rem"}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              id="email"
              label="email"
              variant="outlined"
              fullWidth
              color="secondary"
              sx={{ marginTop: "1rem" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              id="password"
              label="password"
              variant="outlined"
              fullWidth
              color="secondary"
              sx={{ marginTop: "1rem" }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 1 }} className="justify-center">
          <Grid item xs={10} sm={6}>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="end" direction="row" sx={{marginTop:"1rem"}}>
            <Typography sx={{marginRight:"0.5rem"}}>Do you have an account?</Typography>
            <Link
              component={RouterLink}
              sx={{ color: "primary.main" }}
              to="/auth/login"
            >
              Login
            </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
