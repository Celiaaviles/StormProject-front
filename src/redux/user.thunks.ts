import { createAsyncThunk } from '@reduxjs/toolkit';
import { Login, User, UserNoId } from '../model/user.model';
import { ApiUsersRepository } from '../services/api.user.repository';
import { Logged } from '../types/logged';

export const registerThunk = createAsyncThunk<
  User,
  { repo: ApiUsersRepository; data: Partial<UserNoId> }
>('users/register', async ({ repo, data }) => {
  return await repo.register(data);
});

export const loginThunk = createAsyncThunk<
  Logged,
  { repo: ApiUsersRepository; data: Login }
>('users/login', async ({ repo, data }) => {
  const loggedUser = await repo.login(data);
  localStorage.setItem('userToken', loggedUser.token as string);
  return loggedUser;
});
