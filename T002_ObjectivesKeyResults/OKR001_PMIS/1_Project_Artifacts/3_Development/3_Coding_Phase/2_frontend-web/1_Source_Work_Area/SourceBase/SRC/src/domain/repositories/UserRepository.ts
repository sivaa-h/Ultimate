import { User } from '../models/User';

export interface UserRepository {
    getUsers: () => Promise<User[]>;
    getUsersById: (id: string) => Promise<User[]>;
}


