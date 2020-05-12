module.exports = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    getUsers() {
        return this.userRepository.get();
    }

    getUserById(id) {
        return this.userRepository.single(id);
    }
}