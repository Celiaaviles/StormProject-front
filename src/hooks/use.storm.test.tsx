import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider, useDispatch } from 'react-redux';
import { Storm } from '../model/storm.model';
import { appStore } from '../store/store';
import { useStorm } from './use.storm';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

describe('Given the hook useStorm', () => {
  const mockStormForm = {} as unknown as FormData;
  const mockStorm = {} as unknown as Storm;
  function MockComponent() {
    const { getStorms, createStorms, updateStorms, deleteStorms } = useStorm();

    return (
      <>
        <button role="button" onClick={() => getStorms()}>
          1
        </button>
        <button role="button" onClick={() => createStorms(mockStormForm)}>
          2
        </button>
        <button role="button" onClick={() => updateStorms(mockStorm)}>
          3
        </button>
        <button role="button" onClick={() => deleteStorms('', '')}>
          4
        </button>
      </>
    );
  }

  describe('When we press a button to run the hook', () => {
    beforeEach(() => {
      render(
        <Provider store={appStore}>
          <MockComponent></MockComponent>
        </Provider>
      );
    });

    test('Then, if we click button 1, loadStorms should have been called', async () => {
      const buttons = screen.getAllByRole('button');

      await userEvent.click(buttons[0]);

      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then, if we click button 2, createStorms should have been called', async () => {
      const buttons = screen.getAllByRole('button');

      await userEvent.click(buttons[1]);

      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then, if we click button 3, updateStorms should have been called', async () => {
      const buttons = screen.getAllByRole('button');

      await userEvent.click(buttons[2]);

      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then, if we click button 4, deleteStorms should have been called', async () => {
      const buttons = screen.getAllByRole('button');

      await userEvent.click(buttons[3]);

      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});
