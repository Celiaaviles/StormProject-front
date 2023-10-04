import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { useStorm } from '../../hooks/use.storm';
import { Storm } from '../../model/storm.model';
import { appStore } from '../../store/store';
import StormDetails from './storm.details';

jest.mock('../../hooks/use.storm.ts');

describe('Given the component storm details', () => {
  describe('When it is rendered', () => {
    const mockStorm = [
      {
        id: '1',
        title: '',
        image: {
          url: '',
        },
        description: '',
        ubication: '',
      },
    ] as unknown as Storm[];

    jest.spyOn(Array.prototype, 'find').mockReturnValue({
      id: '1',
      title: '',
      image: {
        url: '',
      },
      description: '',
      ubication: '',
    });

    (useStorm as jest.Mock).mockReturnValue({
      stormsState: { storms: mockStorm },
    });

    beforeEach(() => {
      jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useParams: () => ({
          id: '1',
        }),
      }));
      render(
        <MemoryRouter>
          <Provider store={appStore}>
            <StormDetails></StormDetails>
          </Provider>
        </MemoryRouter>
      );
    });

    test('Then, a link with the button role should be in the document', () => {
      const link = screen.getByRole('button');
      expect(link).toBeInTheDocument();
    });
  });
});
