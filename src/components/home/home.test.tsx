import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { appStore } from '../../store/store';
import Home from './home';

describe('Given the componente Home', () => {
  describe('When we render it', () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Home></Home>
        </Provider>
      </BrowserRouter>
    );
    test('the component should be in the document', () => {
      const element = screen.getByRole('main');
      expect(element).toBeInTheDocument();
    });
  });
});
