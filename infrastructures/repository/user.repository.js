const { User } = require("../../domains");
const { MetaData } = require("../../domains/value-objects");

module.exports = class UserRepository {
  constructor(context) {
    this.context = context;
  }

  async get() {
    const models = await this.context.user.where();
    const domains = models.map(this.convertToDomain);
    return domains;
  }

  async single(id) {
    const model = await this.context.user.first((entity) => entity.id === id);
    const domain = this.convertToDomain(model);
    return domain;
  }

  convertToDomain(model) {
    const {
      id,
      first_name,
      last_name,
      email,
      gender,
      app_version,
      profile_photo_url,
      meta,
    } = model;

    const user = new User(
      id,
      first_name,
      last_name,
      email,
      gender,
      app_version
    );

    if (meta[0]) {
      const { address, ip_address, bio } = meta[0];
      const metaData = new MetaData(address, ip_address, bio);
      user.setMeta(metaData);
    }

    user.setProfilePhotoUrl(profile_photo_url);

    return user;
  }
};
