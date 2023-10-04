import { Login, UserNoId } from '../model/user.model';
import { ApiUsersRepository } from '../services/api.user.repository';
import { appStore } from '../store/store';
import { loginThunk, registerThunk } from './user.thunks';

describe('Given the thunks register', () => {
  describe('When we use them', () => {
    test('Then, the registerThunk should call the repo', async () => {
      const mockRepo = {
        register: jest.fn(),
      } as unknown as ApiUsersRepository;
      const mockUser = {
        userName: '',
        passwd: '',
        email: '',
      } as unknown as Partial<UserNoId>;

      appStore.dispatch(registerThunk({ repo: mockRepo, data: mockUser }));
      await expect(mockRepo.register).toHaveBeenCalled();
    });
    describe('And the loginThunk should call the repo', () => {
      test('And the loginThunk should call the repo', async () => {
        const mockRepo = {
          login: jest.fn(),
        } as unknown as ApiUsersRepository;
        const mockLogin = {
          userName: '',
          passwd: '',
        } as unknown as Login;
        appStore.dispatch(loginThunk({ repo: mockRepo, data: mockLogin }));
        await expect(mockRepo.login).toHaveBeenCalled();
      });
    });
  });
});
