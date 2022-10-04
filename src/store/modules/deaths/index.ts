import { getAllDeathsParams } from 'api/deaths/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { DeathsState } from './types';
import { deathService } from 'api';
const initialState: DeathsState = {
  deaths: [],
};

export const GetAllDeaths = createAsyncThunk('deaths/getAllDeaths', async (params: getAllDeathsParams | undefined, ThunkApi) => {
  return await deathService.getAllDeaths(params).then((response) => response.data);
});

export const GetDeathsById = createAsyncThunk('deaths/getDeathsByIdById', async (id: number, ThunkApi) => {
  return await deathService.getDeathsById(id).then((response) => response.data[0]);
});

export const deathsSlice = createSlice({
  name: 'deaths',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllDeaths.pending, (state) => {
        state.deathssLoading = true;
      })
      .addCase(GetAllDeaths.fulfilled, (state, action) => {
        state.deaths = action.payload;
        state.deathssLoading = false;
      })
      .addCase(GetDeathsById.pending, (state) => {
        state.currentDeathLoading = true;
      })
      .addCase(GetDeathsById.fulfilled, (state, action) => {
        state.currentDeath = action.payload;
        state.currentDeathLoading = false;
      });
  },
});
