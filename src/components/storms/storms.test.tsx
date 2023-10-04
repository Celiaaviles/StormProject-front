import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { useStorm } from '../../hooks/use.storm';
import { appStore } from '../../store/store';
import Storms from './storms';

jest.mock('../storm/storm.tsx');
jest.mock('../../hooks/use.storm.ts');

describe('Given the component Storms', () => {
  describe('When it is rendered', () => {
    (useStorm as jest.Mock).mockReturnValue({
      stormsState: {
        storms: [],
      },
      getStorms: jest.fn(),
    });

    beforeEach(() => {
      render(
        <MemoryRouter>
          <Provider store={appStore}>
            <Storms></Storms>
          </Provider>
        </MemoryRouter>
      );
    });

    test('Then a list should be in the document', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
