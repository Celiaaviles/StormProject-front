import { StormNoId } from '../model/storm.model';
import { ApiStormsRepository } from '../services/api.storm.repository';
import { appStore } from '../store/store';
import {
  createStormThunk,
  deleteStormThunk,
  loadAllStormThunk,
  loadByIdStormThunk,
  updateStormThunk,
} from './storm.thunks';

describe('Given the StormThunk', () => {
  describe('When we use it', () => {
    test('Then, the method getAll should be called', () => {
      const mockRepo = {
        getAll: jest.fn(),
      } as unknown as ApiStormsRepository;

      appStore.dispatch(loadAllStormThunk(mockRepo));
      expect(mockRepo.getAll).toHaveBeenCalled();
    });
  });

  test('Then, the method loadByIbThunk should be called', () => {
    const mockRepo = {
      getById: jest.fn(),
    } as unknown as ApiStormsRepository;

    appStore.dispatch(loadByIdStormThunk({ repo: mockRepo, id: '' }));
    expect(mockRepo.getById).toHaveBeenCalled();
  });

  test('Then, the method createStormThunk should be called', () => {
    const mockRepo = {
      create: jest.fn(),
    } as unknown as ApiStormsRepository;

    appStore.dispatch(
      createStormThunk({ repo: mockRepo, formData: {} as FormData })
    );
    expect(mockRepo.create).toHaveBeenCalled();
  });

  test('Then, the method updateStormThunk should be called', () => {
    const mockRepo = {
      update: jest.fn(),
    } as unknown as ApiStormsRepository;

    appStore.dispatch(
      updateStormThunk({ repo: mockRepo, storm: {} as Partial<StormNoId> })
    );
    expect(mockRepo.update).toHaveBeenCalled();
  });

  test('Then, the method deleteStormThunk should be called', () => {
    const mockRepo = {
      delete: jest.fn(),
    } as unknown as ApiStormsRepository;

    appStore.dispatch(deleteStormThunk({ repo: mockRepo, id: '', token: '' }));
    expect(mockRepo.delete).toHaveBeenCalled();
  });
});
