import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { useStorm } from '../../hooks/use.storm';
import { useUser } from '../../hooks/use.user';
import { appStore } from '../../store/store';
import { Logged } from '../../types/logged';
import Profile from './profile';

jest.mock('../../../config.ts', () => ({
  url: '',
}));

jest.mock('../../hooks/use.storm.ts');
jest.mock('../../hooks/use.user.ts');

describe('Given the component Profile', () => {
  const currentUser = {
    user: { id: '1' },
    token: '',
  } as Logged;
  describe('When we render it', () => {
    (useStorm as jest.Mock).mockReturnValue({
      storms: [{ owner: { id: '1' }, image: { url: '' } }],
      getStorms: jest.fn(),
    });
    (useUser as jest.Mock).mockReturnValue({
      currentUser,
    });
    beforeEach(() => {
      render(
        <Provider store={appStore}>
          <Router>
            <Profile></Profile>
          </Router>
        </Provider>
      );
    });
    test('Then a list should be in the document', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
