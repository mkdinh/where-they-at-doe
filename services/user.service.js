export default class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    getUsers() {
        return this.userRepository.get();
    }

    getUserById(id) {
        return this.userRepository.single(id);
    }

    updateUser(user) {
        return this.userRepository.update(user);
    }

    removeUser(user) {
        return this.userRepository.remove(user.id);
    }
}