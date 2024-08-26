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

    console.log(user)

    return user;
  }

  async updateUser(id, params) {
    // check if user exists
    const user = await this.userRepository.single(id);
    if (!user) throw Error('user does not exist.')
    
    user.firstName = params.firstName || user.firstName;

    if (params.lastName) {
      user.lastName = params.lastName;
    }

    if (params.email) {
      user.email = params.email;
    }

    return this.userRepository.update(user)
  }
};
