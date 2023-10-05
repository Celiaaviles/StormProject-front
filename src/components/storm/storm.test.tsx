import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { Storm as storm } from '../../model/storm.model';
import { appStore } from '../../store/store';
import { StormCard } from './storm';

jest.mock('../../../config.ts', () => ({
  url: '',
}));

describe('Given the component Storm Card', () => {
  describe('When it is rendered', () => {
    const mockStorm = {
      image: {
        url: 'string',
      },
    } as unknown as storm;
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Provider store={appStore}>
            <StormCard storm={mockStorm}></StormCard>
          </Provider>
        </MemoryRouter>
      );
    });

    test('Then an alt text should be in the document', () => {
      const element = screen.getByAltText('Storm image');
      expect(element).toBeInTheDocument();
    });
  });
});
