import { User } from "./user";

export interface SessionData {
  user: User;
  token: string;
}
