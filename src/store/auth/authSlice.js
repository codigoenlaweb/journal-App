import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    status: 'checking', // authenticated, checking, notAuthenticated
    id: null,
    email: null,
    displayName: null,
    photoURL: null,
    error: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, {payload}) => {
        state.status = 'authenticated';
        state.id = payload.id;
        state.email = payload.email;
        state.displayName = payload.displayName;
        state.photoURL = payload.photoURL;
        state.error = null;
    },

    logout: (state, {payload}) => {
        state.status = 'notAuthenticated';
        state.id = null;
        state.email = null;
        state.displayName = null;
        state.photoURL = null;
        state.error = payload.error;
    },

    checkingAuth: (state, {payload}) => {
        state.status = 'checking';
    }
  },
});
// Action creators are generated for each case reducer function
export const { login, logout, checkingAuth } = authSlice.actions;