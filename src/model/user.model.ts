import { WithId } from '../types/id';
import { Storm } from './storm.model';

export type Login = {
  userName: string;
  passwd: string;
};

export type UserNoId = Login & {
  email: string;
  city: string;
  storms: Storm[];
};

export type User = WithId & UserNoId;
