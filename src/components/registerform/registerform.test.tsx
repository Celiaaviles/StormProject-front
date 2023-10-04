import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserNoId } from '../../model/user.model';
import { appStore } from '../../store/store';
import RegisterForm from './registerform';

describe('Given the component registerForm', () => {
  beforeEach(() =>
    render(
      <Provider store={appStore}>
        <Router>
          <RegisterForm></RegisterForm>
        </Router>
      </Provider>
    )
  );
  describe('When we render it', () => {
    const mockUser = {
      userName: 'name',
      passwd: '',
      email: '',
    } as UserNoId;
    test('Then, the label should be in the document', () => {
      const element = screen.getByPlaceholderText('User name');
      expect(element).toBeInTheDocument();
    });

    test('Then, the register button should be in the document', () => {
      const element = screen.getByRole('button');
      expect(element.textContent).toBe('Create account');
    });

    test('Then, function Register form should have been called', async () => {
      const formElement = screen.getByRole('form');
      const inputElements = screen.getAllByRole('textbox');

      await userEvent.type(inputElements[0], mockUser.userName);

      expect(inputElements[0]).toHaveValue(mockUser.userName);

      await fireEvent.submit(formElement);
    });
    test('Then, the Swal should be called', () => {
      const SwalMock = jest.spyOn(Swal, 'fire');
      const formElement = screen.getByRole('form');
      const inputElements = screen.getAllByRole('textbox');

      userEvent.type(inputElements[0], mockUser.userName);
      userEvent.type(inputElements[1], mockUser.passwd);
      userEvent.type(inputElements[2], mockUser.email);

      fireEvent.submit(formElement);

      expect(SwalMock).toHaveBeenCalled();
    });
    test('Then Swal.fire should be called', async () => {
      const form = screen.getByRole('form') as HTMLFormElement;
      fireEvent.submit(form);

      expect(Swal.fire).toHaveBeenCalledWith({
        width: '35em',
        background: '#3b3b3b',
        color: '#ffffff',
        iconColor: '#c57642',
        position: 'top-end',
        icon: 'error',
        title: 'ERROR',
        showConfirmButton: false,
        text: 'Please fill in all fields',
        timer: 4000,
      });
    });
    test('The registerUser should be called on form submit', async () => {
      const registerUsersMock = jest.fn();
      const form = screen.getByRole('form') as HTMLFormElement;
      const userNameInput = screen.getByPlaceholderText(
        'User name'
      ) as HTMLInputElement;
      const passwdInput = screen.getByPlaceholderText(
        'Password'
      ) as HTMLInputElement;
      const emailInput = screen.getByPlaceholderText(
        'Email Address'
      ) as HTMLInputElement;

      await userEvent.type(userNameInput, 'user');
      await userEvent.type(passwdInput, 'passwd');
      await userEvent.type(emailInput, 'email');

      fireEvent.submit(form);

      expect(registerUsersMock).toHaveBeenCalledWith({
        userName: 'user',
        passwd: 'passwd',
        email: 'email',
      });
    });
  });
});
