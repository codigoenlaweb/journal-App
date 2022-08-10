import { checkingAuth } from "./authSlice";

export const checkingCredentials = () => {
    return async (dispatch) => {
        dispatch(checkingAuth());
    }
}

export const startGoogleLogin = () => {
    return async (dispatch) => {
        dispatch(checkingAuth());
    }
}