import { User } from '../model/user.model';

export type Logged = {
  user: User;
  token: string;
};
