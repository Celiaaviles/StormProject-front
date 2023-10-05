import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { appStore } from '../../store/store';
import { Header } from './header';

jest.mock('../../../config.ts', () => ({
  url: '',
}));

describe('Given the componente Header', () => {
  describe('When we render it', () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Header></Header>
        </MemoryRouter>
      </Provider>
    );
    test('the component should be in the document', () => {
      const element = screen.getByText('Register');
      expect(element).toBeInTheDocument();
    });
  });

  describe('Menu', () => {
    test('should toggle menu visibility when menu button is clicked', () => {
      render(
        <Provider store={appStore}>
          <MemoryRouter>
            <Header></Header>
          </MemoryRouter>
        </Provider>
      );
      const Button = screen.getByLabelText('button');
      const home = screen.getByText('Home');
      expect(home).toBeVisible();
      fireEvent.click(Button);
      expect(home).toBeVisible();
      fireEvent.click(Button);
      expect(home).toBeVisible();
    });
  });
});
