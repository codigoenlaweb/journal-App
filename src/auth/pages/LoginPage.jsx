import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {
  startGoogleLogin,
  startLoginUserWithEmail,
} from "../../store/auth/thunks";
import { AuthLayout } from "../layouts/AuthLayout";

const formData = { email: "", password: "" };

export const LoginPage = () => {
  // FORMS
  const formValdations = {
    email: [(value) => value.includes("@"), "Email includes @"],
    password: [
      (value) => value.length > 6,
      "Password must be at least 6 characters",
    ],
  };
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    isFormValid,
    email,
    emailValid,
    password,
    passwordValid,
    onInputChange,
  } = useForm(formData, formValdations);
  // REDUX
  const { status, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // TOOLS
  const authenticating = useMemo(() => status === "checking", [status]);

  // LOGIN WITH GOOGLE
  const onGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  // LOGIN WITH EMAIL AND PASSWORD
  const userLogin = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (isFormValid) {
      dispatch(startLoginUserWithEmail(email, password));
    }
  };

  return (
    <AuthLayout title={"Login"}>
      <form onSubmit={userLogin}>
        <Grid container justifyContent="center">
          <Grid
            display={!!error ? "" : "none"}
            xs={12}
            className="mt-2"
            sx={{ marginTop: "16px", marginBottom: "4px" }}
            item
          >
            <Alert severity="error">{error}</Alert>
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
              value={email}
              name="email"
              error={!!emailValid && formSubmitted}
              helperText={formSubmitted && emailValid}
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
              error={!!passwordValid && formSubmitted}
              helperText={formSubmitted && passwordValid}
              onChange={onInputChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 1 }} className="justify-center">
          <Grid item xs={10} sm={5}>
            <Button
              disabled={authenticating}
              type="submit"
              variant="contained"
              fullWidth
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={10} sm={5}>
            <Button
              disabled={authenticating}
              onClick={onGoogleLogin}
              variant="contained"
              fullWidth
            >
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
