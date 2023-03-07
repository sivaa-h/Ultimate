import { User } from '../models/User';
import { httpAxios } from '../../infrastructure/instances/httpAxios';

const baseApiUrl = 'http://localhost:3000/api/'
export const userService = (): any => ({
    getUsers: async () => {
        const url = baseApiUrl +'getusers';
        const users = await httpAxios.get<User>(url);
        return users.map((user: User): User => ({ username: user.username, email: user.email, password: user.password }));

    },
    getUserById: async (id: Record<string, any> | undefined) => {
        const url = baseApiUrl +'getusersbyid'+ id;
        const users = await httpAxios.get<User>(url, id);
        return users.map((user: User): User => ({ username: user.username, email: user.email, password: user.password }));
    }
});
