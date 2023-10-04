import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Storm } from '../model/storm.model';
import {
  createStormThunk,
  deleteStormThunk,
  loadAllStormThunk,
  loadByIdStormThunk,
  updateStormThunk,
} from '../redux/storm.thunks';
import { ApiStormsRepository } from '../services/api.storm.repository';
import { AppDispatch, RootState } from '../store/store';

export const urlBase = 'http://localhost:4300/storms';

export function useStorm() {
  const repo = useMemo(() => new ApiStormsRepository(urlBase), []);

  const { stormsState, storms } = useSelector(
    (state: RootState) => state.storms
  );
  const stormsDispatch = useDispatch<AppDispatch>();

  const getStorms = useCallback(async () => {
    await stormsDispatch(loadAllStormThunk(repo));
  }, [repo, stormsDispatch]);

  const getByIdStorms = async (id: string) => {
    await stormsDispatch(loadByIdStormThunk({ repo, id }));
  };

  const createStorms = async (data: FormData) => {
    await stormsDispatch(createStormThunk({ repo, formData: data }));
  };

  const updateStorms = async (data: Partial<Storm>) => {
    await stormsDispatch(updateStormThunk({ repo, storm: data }));
  };

  const deleteStorms = async (id: string, token: string) => {
    await stormsDispatch(deleteStormThunk({ repo, id, token }));
  };

  return {
    getStorms,
    getByIdStorms,
    createStorms,
    updateStorms,
    deleteStorms,
    stormsState,
    storms,
  };
}
