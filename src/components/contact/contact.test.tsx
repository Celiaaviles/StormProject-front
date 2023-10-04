import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { appStore } from '../../store/store';
import Contact from './contact';

describe('Given the component Contact', () => {
  describe('When we render it', () => {
    render(
      <MemoryRouter>
        <Provider store={appStore}>
          <Contact></Contact>
        </Provider>
      </MemoryRouter>
    );

    test('the component should be in the document', () => {
      const text = screen.getByAltText('picture of a beautiful storm.');
      expect(text).toBeInTheDocument();
    });
  });
});
