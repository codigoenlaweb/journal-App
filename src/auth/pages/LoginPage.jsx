import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { checkingCredentials, startGoogleLogin } from "../../store/auth/thunks";
import { AuthLayout } from "../layouts/AuthLayout";

export const LoginPage = () => {
  const {email, password, onInputChange} = useForm({email: "", password: ""});
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(checkingCredentials());
  }

  const onGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  return (
    <AuthLayout title={"Login"}>
      <form onSubmit={ onSubmit }>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <TextField
              type="email"
              id="email"
              label="email"
              variant="outlined"
              fullWidth
              color="secondary"
              sx={{ marginTop: "1rem" }}
              value={email}
              name="email"
              onChange={onInputChange}
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
              value={password}
              name="password"
              onChange={onInputChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 1 }} className="justify-center">
          <Grid item xs={10} sm={5}>
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={10} sm={5}>
            <Button onClick={ onGoogleLogin } variant="contained" fullWidth>
              <Google className="mr-2" /> Google
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="end">
          <Grid item sx={{ marginTop: "1rem" }}>
            <Link
              component={RouterLink}
              sx={{ color: "primary.main" }}
              to="/auth/register"
            >
              Register account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
