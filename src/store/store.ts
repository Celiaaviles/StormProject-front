import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import stormsReducer from '../redux/storm.slice';
import usersReducer from '../redux/user.slice';

export const appStore = configureStore({
  reducer: {
    users: usersReducer,
    storms: stormsReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
