import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider, useDispatch } from 'react-redux';
import { appStore } from '../store/store';
import { useUser } from './use.user';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

jest.mock('../../config.ts', () => ({
  url: '',
}));

describe('Given the hook useUsers', () => {
  function TestComponent() {
    const { logoutUsers } = useUser();

    return (
      <>
        <button role="button" onClick={() => logoutUsers()}>
          1
        </button>
      </>
    );
  }

  describe('When the component run the hook', () => {
    beforeEach(() => {
      render(
        <Provider store={appStore}>
          <TestComponent></TestComponent>
        </Provider>
      );
    });

    test('Then, if we click 1, the state should be rendered', async () => {
      const button = screen.getByRole('button');
      await userEvent.click(button);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});
