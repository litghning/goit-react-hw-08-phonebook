import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refCurrentUser, register } from './operations';

const initialStateAuth = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleExitFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleExitFulfilled)
      .addCase(logIn.fulfilled, handleExitFulfilled)
      .addCase(logOut.fulfilled, state => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refCurrentUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;