import { UserRepository } from '../repositories/UserRepository';
export const userService = (repository: UserRepository): UserRepository => ({
    getUsers: () => {
        return repository.getUsers();
    },
    getUsersById: id => {
        return repository.getUsersById(id);
    }
});
