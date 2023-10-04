import { createSlice } from '@reduxjs/toolkit';
import { User } from '../model/user.model';
import { loginThunk, registerThunk } from './user.thunks';

export type UsersState = {
  users: User[];
  loginState: 'idle' | 'loaded' | 'error';
  token?: string;
  userStorms: User['storms'];
  currentUser: User | null;
};

export const initialState: UsersState = {
  users: [],
  loginState: 'idle',
  token: localStorage.getItem('userToken') as string | undefined,
  userStorms: [],
  currentUser: null,
};

const usersSlice = createSlice({
  initialState: initialState,
  name: 'users',
  reducers: {
    logout: (state) => (state.token = undefined),
  },
  extraReducers(builder) {
    builder.addCase(registerThunk.fulfilled, (state, { payload }) => ({
      ...state,
      users: [...state.users, payload],
    }));

    builder.addCase(loginThunk.fulfilled, (state, { payload }) => ({
      ...state,
      loginState: 'loaded',
      token: payload.token,
      userStorms: payload.user.storms,
      currentUser: payload.user,
    }));
    builder.addCase(loginThunk.pending, (state) => ({
      ...state,
      loginState: 'idle',
    }));
    builder.addCase(loginThunk.rejected, (state) => {
      state.loginState = 'error';
    });
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
