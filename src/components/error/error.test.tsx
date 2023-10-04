import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ErrorPage from './error';

describe('Given the component ErrorPage', () => {
  describe('When we render it', () => {
    render(<ErrorPage></ErrorPage>);
    test('the component should be in the document', () => {
      const element = screen.getByText('Error 404');
      expect(element).toBeInTheDocument();
    });
  });
});
