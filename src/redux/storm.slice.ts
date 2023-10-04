import { createSlice } from '@reduxjs/toolkit';
import { Storm } from '../model/storm.model';
import {
  createStormThunk,
  deleteStormThunk,
  loadAllStormThunk,
  updateStormThunk,
} from './storm.thunks';

export type StormsState = {
  storms: Storm[];
  stormsState: 'idle' | 'loaded' | 'error';
};

const initialState: StormsState = {
  storms: [],
  stormsState: 'idle',
};
const stormsSlice = createSlice({
  initialState: initialState,
  name: 'storms',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAllStormThunk.pending, (state) => {
      state.stormsState = 'idle';
    });
    builder.addCase(
      loadAllStormThunk.fulfilled,
      (state, { payload }: { payload: Storm[] }) => {
        state.stormsState = 'loaded';
        state.storms = payload;
      }
    );
    builder.addCase(loadAllStormThunk.rejected, (state) => {
      state.stormsState = 'error';
    });
    builder.addCase(createStormThunk.pending, (state) => {
      state.stormsState = 'idle';
    });
    builder.addCase(
      createStormThunk.fulfilled,
      (state, { payload }: { payload: Storm }) => {
        state.stormsState = 'loaded';
        state.storms?.push(payload);
      }
    );
    builder.addCase(createStormThunk.rejected, (state) => {
      state.stormsState = 'error';
    });
    builder.addCase(updateStormThunk.pending, (state) => {
      state.stormsState = 'idle';
    });
    builder.addCase(
      updateStormThunk.fulfilled,
      (state, { payload }: { payload: Storm }) => {
        state.stormsState = 'loaded';
        state.storms = state.storms?.map((item) =>
          item.id === payload.id ? payload : item
        );
      }
    );
    builder.addCase(updateStormThunk.rejected, (state) => {
      state.stormsState = 'error';
    });
    builder.addCase(deleteStormThunk.pending, (state) => {
      state.stormsState = 'idle';
    });

    builder.addCase(deleteStormThunk.rejected, (state) => {
      state.stormsState = 'error';
    });
  },
});

export const stormsActions = stormsSlice.actions;
export default stormsSlice.reducer;
