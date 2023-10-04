/* eslint-disable no-unused-vars */

import { Login } from '../model/user.model';
import { Logged } from '../types/logged';
export interface Repository<X extends { id: string | number }> {
  getAll(token?: string): Promise<X[]>;
  getById(id: X['id'], token?: string): Promise<X>;
  create?(newData: FormData, token?: string): Promise<X>;
  update(newData: Partial<X>, id?: X['id'], token?: string): Promise<X>;
  delete?(id: string, token?: string): Promise<void>;
  login?(data: Login): Promise<Logged>;
}
