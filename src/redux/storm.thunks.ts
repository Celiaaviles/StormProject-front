import { createAsyncThunk } from '@reduxjs/toolkit';
import { Storm } from '../model/storm.model';
import { ApiStormsRepository } from '../services/api.storm.repository';

export const loadAllStormThunk = createAsyncThunk<Storm[], ApiStormsRepository>(
  'storms/load',
  async (repo) => {
    const storms = await repo.getAll();
    return storms;
  }
);

export const loadByIdStormThunk = createAsyncThunk<
  Storm,
  { repo: ApiStormsRepository; id: string }
>('storms/loadById', async ({ repo, id }) => {
  const storm = await repo.getById(id);
  return storm;
});

export const createStormThunk = createAsyncThunk<
  Storm,
  { repo: ApiStormsRepository; formData: FormData }
>('storms/create', async ({ repo, formData }) => {
  const storm = await repo.create(formData);
  return storm;
});

export const updateStormThunk = createAsyncThunk<
  Storm,
  { repo: ApiStormsRepository; storm: Partial<Storm> }
>('storms/update', async ({ repo, storm }) => {
  const updateStorm = repo.update(storm, storm.id!);
  return updateStorm;
});

export const deleteStormThunk = createAsyncThunk<
  void,
  {
    repo: ApiStormsRepository;
    id: string;
    token: string;
  }
>('storms/delete', async ({ repo, id }) => {
  repo.delete(id);
  return;
});
