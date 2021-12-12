import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import authApi from 'api/authApi';
import { usersModel } from 'models/';

export const userLogin = createAsyncThunk('user/login/', async (data: usersModel) => {
  try {
    const response = await authApi.login(data);
    // localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.token);
    // localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN_NAME, response.refreshToken || '');
    return response;
  } catch (error) {
    console.log(error);
  }
});

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser: string | undefined;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<string>) {
      state.isLoggedIn = true;
      state.logging = false;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(userLogin.pending, (state, payload) => {});
    builder.addCase(userLogin.fulfilled, (state, payload) => {
      state.isLoggedIn = true;
      state.logging = false;
    });
    builder.addCase(userLogin.rejected, (state, payload) => {
      state.logging = false;
    });
  },
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;