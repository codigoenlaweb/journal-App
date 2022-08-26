import { async } from "@firebase/util";
import {
  googleSignIn,
  loginUserWithEmail,
  logoutFirebase,
  registerUserWithEmail,
} from "../../firebase/providers";
import { checkingAuth, login, logout } from "./authSlice";

export const checkingCredentials = () => {
  return async (dispatch) => {
    dispatch(checkingAuth());
  };
};

export const startGoogleLogin = () => {
  return async (dispatch) => {
    dispatch(checkingAuth());
    const result = await googleSignIn();

    if (result.ok) {
      return dispatch(
        login({
          id: result.uid,
          email: result.email,
          displayName: result.displayName,
          photoURL: result.photoURL,
        })
      );
    } else {
      return dispatch(logout({ error: result.error }));
    }
  };
};

export const createUserWithEmailAndPassword = (
  email,
  password,
  displayName
) => {
  return async (dispatch) => {
    dispatch(checkingAuth());
    const result = await registerUserWithEmail(email, password, displayName);

    if (result.ok) {
      return dispatch(
        login({
          id: result.uid,
          email: result.email,
          displayName: result.displayName,
          photoURL: result.photoURL,
        })
      );
    } else {
      return dispatch(logout({ error: result.error }));
    }
  };
};

export const startLoginUserWithEmail = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingAuth());
    const result = await loginUserWithEmail(email, password);

    if (result.ok) {
      return dispatch(
        login({
          id: result.uid,
          email: result.email,
          displayName: result.displayName,
          photoURL: result.photoURL,
        })
      );
    } else {
      return dispatch(logout({ error: result.error }));
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    dispatch(checkingAuth());
    const result = await logoutFirebase();
    if (result.ok) {
      return dispatch(
        logout({
          error: null,
        })
      );
    }else {
      return;
    }
  };
};
