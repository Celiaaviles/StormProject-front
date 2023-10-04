import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserNoId } from '../../model/user.model';
import { appStore } from '../../store/store';
import LoginForm from './loginform';

describe('if we use loginForm', () => {
  beforeEach(() =>
    render(
      <Provider store={appStore}>
        <Router>
          <LoginForm></LoginForm>
        </Router>
      </Provider>
    )
  );
  describe('if render it', () => {
    const mockloginUser = {
      userName: 'name',
      passwd: '',
    } as UserNoId;
    test('Then, userName label is', () => {
      const labelElement = screen.getByPlaceholderText('User name');
      expect(labelElement).toBeInTheDocument();
    });

    test('Then, the login button is', () => {
      const buttonElement = screen.getByRole('button');
      expect(buttonElement.textContent).toBe('Login');
    });

    test('Then, function Login form should have been called', async () => {
      const formLoginElement = screen.getByRole('form');
      const inputLoginElements = screen.getAllByRole('textbox');

      await userEvent.type(inputLoginElements[0], mockloginUser.userName);

      expect(inputLoginElements[0]).toHaveValue(mockloginUser.userName);

      await act(() => {
        fireEvent.submit(formLoginElement);
      });
    });
  });
});
