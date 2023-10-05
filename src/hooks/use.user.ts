import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { url } from '../../config.ts';
import { Login, UserNoId } from '../model/user.model';
import { usersActions } from '../redux/user.slice';
import { loginThunk, registerThunk } from '../redux/user.thunks';
import { ApiUsersRepository } from '../services/api.user.repository';
import { AppDispatch, RootState } from '../store/store';

export const urlBase = url + '/users';

export function useUser() {
  const repo = useMemo(() => new ApiUsersRepository(urlBase), []);

  const { token, users, loginState, userStorms, currentUser } = useSelector(
    (state: RootState) => state.users
  );
  const dispatch = useDispatch<AppDispatch>();

  const registerUsers = async (data: Partial<UserNoId>) => {
    dispatch(registerThunk({ repo, data }));
  };

  const loginUsers = async (data: Login) => {
    dispatch(loginThunk({ repo, data }));
  };

  const logoutUsers = () => {
    dispatch(usersActions.logout);
    localStorage.removeItem('userToken');
  };

  return {
    currentUser,
    registerUsers,
    loginUsers,
    loginState,
    users,
    logoutUsers,
    token,
    userStorms,
  };
}
