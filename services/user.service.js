module.exports = class UserService {
  constructor(userRepository, ipService) {
    this.userRepository = userRepository;
    this.ipService = ipService;
  }

  getUsers() {
    return this.userRepository.get();
  }

  async getUserById(id) {
    const user = await this.userRepository.single(id);
    const meta = user.meta;

    if (meta) {
      const location = await this.ipService.getLocationFromIP(meta.ipAddress);
      user.setLocation(location);
    }

    return user;
  }
};
