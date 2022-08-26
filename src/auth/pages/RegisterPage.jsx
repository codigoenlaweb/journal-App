import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { createUserWithEmailAndPassword } from "../../store/auth/thunks";
import { AuthLayout } from "../layouts/AuthLayout";

const formValdations = {
  email: [(value) => value.includes("@"), "Email includes @"],
  password: [(value) => value.length > 6, "Password must be at least 6 characters"],
  displayName: [(value) => value.length > 2, "Display name must be at least 2 characters"],
};

export const RegisterPage = () => {
  const {status, error} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const {
    isFormValid,
    displayName,
    displayNameValid,
    email,
    emailValid,
    password,
    passwordValid,
    onInputChange,
  } = useForm({ email: "", password: "", displayName: "" }, formValdations);

  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const onRegister = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (isFormValid) {
      dispatch(createUserWithEmailAndPassword(email, password, displayName));
    }
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={onRegister}>
        <Grid container justifyContent="center">
          <Grid display={!!error? '': "none"} xs={12} className="mt-2" sx={{marginTop:"16px", marginBottom:"4px"}} item>
            <Alert severity="error">{error}</Alert>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              id="displayName"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              label="Full name"
              variant="outlined"
              fullWidth
              color="secondary"
              sx={{ marginTop: "1rem" }}
              error={!!displayNameValid && formSubmitted}
              helperText={formSubmitted && displayNameValid}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onInputChange}
              label="email"
              variant="outlined"
              fullWidth
              color="secondary"
              sx={{ marginTop: "1rem" }}
              error={!!emailValid && formSubmitted}
              helperText={formSubmitted && emailValid}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onInputChange}
              label="password"
              variant="outlined"
              fullWidth
              color="secondary"
              sx={{ marginTop: "1rem" }}
              error={!!passwordValid && formSubmitted}
              helperText={formSubmitted && passwordValid}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 1 }} className="justify-center">
          <Grid item xs={10} sm={6}>
            <Button disabled={status === 'checking'? true: false} variant="contained" fullWidth type="submit">
              Register
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="end"
          direction="row"
          sx={{ marginTop: "1rem" }}
        >
          <Typography sx={{ marginRight: "0.5rem" }}>
            Do you have an account?
          </Typography>
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
