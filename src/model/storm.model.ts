import { ImgData } from '../types/image';
import { StormWithId } from '../types/stormid';
import { User } from './user.model';

export type StormNoId = {
  title: string;
  image: ImgData;
  ubication: 'America' | 'Asia' | 'Africa' | 'Europe' | 'Oceania';
  description: string;
  owner: User;
};

export type Storm = StormWithId & StormNoId;
