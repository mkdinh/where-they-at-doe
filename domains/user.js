module.exports = class User {
  constructor(id, firstName, lastName, email, gender, appVersion) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
    this.appVersion = appVersion;
    this.profilePhotoUrl = null;
    this.location = null;
    this.fullName = `${firstName} ${lastName}`;
  }

  setMeta(meta) {
    this.meta = meta;
  }

  setProfilePhotoUrl(url) {
    this.profilePhotoUrl = url;
  }

  setLocation(location) {
    this.location = location;
  }
};
