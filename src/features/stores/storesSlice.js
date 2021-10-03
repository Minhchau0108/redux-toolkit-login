import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  stores: [],
  loading: false,
  totalStores: 1,
};

export const getAllStores = createAsyncThunk(
  "stores/getAllStores",
  async ({ page = 1, perPage = 10, orderBy }) => {
    try {
      let queryOrder = "";
      if (orderBy) {
        queryOrder = `&orderBy=${orderBy}`;
      }
      const response = await fetch(
        `http://178.128.56.76:3003/api/v1/stores?&page=${page}&perPage=${perPage}${queryOrder}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        return data;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const storesSlice = createSlice({
  name: "stores",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllStores.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllStores.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.stores = payload.results;
        state.totalStores = payload.total;
      })
      .addCase(getAllStores.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const storesSelector = (state) => state.stores;

export default storesSlice.reducer;
