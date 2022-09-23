import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { episodesService } from 'api';
import { EpisodesState } from './types';

const initialState: EpisodesState = {
  episodes: [],
};

export const getAllEpisodes = createAsyncThunk('episodes/getAllEpisodes', async (payload, ThunkApi) => {
  return await episodesService.getAllEpisodes().then((response) => response.data);
});

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEpisodes.pending, (state) => {
        state.episodesLoading = true;
      })
      .addCase(getAllEpisodes.fulfilled, (state, action) => {
        state.episodes = action.payload;
        state.episodesLoading = false;
      });
  },
});

export const {} = episodesSlice.actions;

export const episodesReducer = episodesSlice.reducer;
