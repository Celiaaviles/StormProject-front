import { Storm } from '../model/storm.model';
import { Repository } from './repository';

export class ApiStormsRepository implements Repository<Storm> {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async getAll(): Promise<Storm[]> {
    const responseGetAll = await fetch(this.urlBase, {
      method: 'GET',
    });
    if (!responseGetAll.ok)
      throw new Error(
        `Error ${responseGetAll.status}: ${responseGetAll.statusText}`
      );
    const dataGetAll = await responseGetAll.json();
    return dataGetAll;
  }

  async getById(id: string): Promise<Storm> {
    const urlBase = this.urlBase + '/' + id;
    const responseGetById = await fetch(urlBase, {
      method: 'GET',
    });
    if (!responseGetById.ok)
      throw new Error(
        `Error ${responseGetById.status}: ${responseGetById.statusText}`
      );
    const dataGetById = await responseGetById.json();
    return dataGetById;
  }

  async create(item: FormData): Promise<Storm> {
    const responseCreate = await fetch(this.urlBase + '/create', {
      method: 'POST',
      body: item,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      },
    });
    if (!responseCreate.ok)
      throw new Error(
        `Error ${responseCreate.status}: ${responseCreate.statusText}`
      );
    const dataCreate = await responseCreate.json();
    return dataCreate;
  }

  async update(item: Partial<Storm>, id: string): Promise<Storm> {
    const url = this.urlBase + '/profile/' + id;
    const responseUpdate = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      },
    });
    if (!responseUpdate.ok)
      throw new Error(
        `Error ${responseUpdate.status}: ${responseUpdate.statusText}`
      );
    const dataUpdate = await responseUpdate.json();
    return dataUpdate;
  }

  async delete(id: string): Promise<void> {
    const url = this.urlBase + '/profile' + id;
    const responseDelete = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      },
    });

    if (!responseDelete.ok)
      throw new Error(
        `Error ${responseDelete.status}: ${responseDelete.statusText}`
      );
  }
}
