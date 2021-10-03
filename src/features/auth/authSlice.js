import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const isAuthenticated = !!localStorage.getItem("accessToken");
const initialState = {
  user: {},
  loading: false,
  isAuthenticated,
  errorMessage: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch("/api-login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (response.status === 200) {
        localStorage.setItem("accessToken", data.token);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data.message);
      }
    } catch (e) {
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.errorMessage = payload;
      });
  },
});
export const { logout } = authSlice.actions;

export const userSelector = (state) => state.auth;

export default authSlice.reducer;
