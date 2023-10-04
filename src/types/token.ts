import { JwtPayload } from 'jsonwebtoken';

export type TokenPayload = JwtPayload & {
  id: string;
  userName: string;
};
