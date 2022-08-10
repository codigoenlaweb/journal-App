import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    status: 'notAuthenticated', // authenticated, checking, notAuthenticated
    id: null,
    email: null,
    displayName: null,
    photoURL: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
        state.status = 'authenticated';
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.displayName = action.payload.displayName;
        state.photoURL = action.payload.photoURL;
    },

    logout: (state, {payload}) => {
        state.status = 'notAuthenticated';
        state.id = null;
        state.email = null;
        state.displayName = null;
        state.photoURL = null;
    },

    checkingAuth: (state, {payload}) => {
        state.status = 'checking';
    }
  },
});
// Action creators are generated for each case reducer function
export const { login, logout, checkingAuth } = authSlice.actions;