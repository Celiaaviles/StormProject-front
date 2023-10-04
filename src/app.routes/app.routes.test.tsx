import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { MenuOption } from '../types/menu.option';
import { AppRoutes } from './app.routes';

const MockedHome = jest.fn().mockReturnValue(<h1>Home</h1>);
jest.mock('../components/home/home', () => MockedHome);

const MockedError = jest.fn().mockReturnValue(<h1>ErrorPage</h1>);
jest.mock('../components/error/error', () => MockedError);

const MockedContact = jest.fn().mockReturnValue(<h1>Contact</h1>);
jest.mock('../components/contact/contact', () => MockedContact);

const MockedStorms = jest.fn().mockReturnValue(<h1>Storms</h1>);
jest.mock('../components/storms/storms', () => MockedStorms);

const MockedRegister = jest.fn().mockReturnValue(<h1>Register</h1>);
jest.mock('../components/registerform/registerform', () => MockedRegister);

const MockedLogin = jest.fn().mockReturnValue(<h1>Login</h1>);
jest.mock('../components/loginform/loginform', () => MockedLogin);

const MockedStorm = jest.fn().mockReturnValue(<h1>Storm</h1>);
jest.mock('../components/details/storm.details', () => MockedStorm);

const MockedProfile = jest.fn().mockReturnValue(<h1>Profile</h1>);
jest.mock('../components/profile/profile', () => MockedProfile);

const MockedForm = jest.fn().mockReturnValue(<h1>Form</h1>);
jest.mock('../components/createstormform/createstorm', () => MockedForm);

describe('Given the componente AppRoutes', () => {
  const optionsMock: MenuOption[] = [
    { path: '/home', label: 'Home' },
    { path: '/contact', label: 'Contact' },
    { path: '/storms', label: 'Storms' },
    { path: '/register', label: 'Register' },
    { path: '/login', label: 'Login' },
    { path: '/error', label: 'ErrorPage' },
    { path: '/profile', label: 'Profile' },
    { path: '/createstorm', label: 'CreateStorm' },
    { path: '/storms/:id', label: 'StormDetailsPage' },
    { path: '/createstorm/:id', label: 'CreateStormFormPage' },
    { path: '/*', label: 'ErrorPage' },
  ];
  const listPaths = (number: number) => {
    render(
      <Router initialEntries={['/', '/*']} initialIndex={number}>
        <AppRoutes options={optionsMock}></AppRoutes>
      </Router>
    );
  };
  describe('When we render it with the route "/"', () => {
    test('the component should render Home', async () => {
      await waitFor(async () => listPaths(0));
      const element = screen.getByText('Home');
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we render it with the route "/contact"', () => {
    test('the component should render Contact', async () => {
      await waitFor(async () => listPaths(1));
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we render it with the route "/storms"', () => {
    test('the component should render Storms', async () => {
      await waitFor(async () => listPaths(2));
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
    describe('When we render it with the route "/register"', () => {
      test('the component should render Register', async () => {
        await waitFor(async () => listPaths(3));
        const element = screen.getByRole('heading');
        expect(element).toBeInTheDocument();
      });
    });
    describe('When we render it with the route "/login"', () => {
      test('the component should render Login', async () => {
        await waitFor(async () => listPaths(4));
        const element = screen.getByRole('heading');
        expect(element).toBeInTheDocument();
      });
    });
    describe('When we render it with the route "/createstorm"', () => {
      test('the component should render Create sotrm', async () => {
        await waitFor(async () => listPaths(5));
        const element = screen.getByRole('heading');
        expect(element).toBeInTheDocument();
      });
    });
    describe('When we render it with the route "/profile"', () => {
      test('the component should render Profile', async () => {
        await waitFor(async () => listPaths(6));
        const element = screen.getByRole('heading');
        expect(element).toBeInTheDocument();
      });
    });
    describe('When we render it with the route "/error"', () => {
      test('the component should render ErrorPage', async () => {
        await waitFor(async () => listPaths(7));
        const element = screen.getByRole('heading');
        expect(element).toBeInTheDocument();
      });
    });
    describe('When we render it with the route "/*"', () => {
      test('the component should render ErrorPage', async () => {
        await waitFor(async () => listPaths(8));
        const element = screen.getByRole('heading');
        expect(element).toBeInTheDocument();
      });
    });
    describe('When we render it with the route "/storms/:id"', () => {
      test('the component should render StormDetailsPage', async () => {
        await waitFor(async () => listPaths(9));
        const element = screen.getByRole('heading');
        expect(element).toBeInTheDocument();
      });
    });
    describe('When we render it with the route "/createstorm/:id"', () => {
      test('the component should render CreateStormFormPage', async () => {
        await waitFor(async () => listPaths(10));
        const element = screen.getByRole('heading');
        expect(element).toBeInTheDocument();
      });
    });
  });
});
