module.exports = class Location {
  constructor(
    city,
    company,
    continentCode,
    countryName,
    countryCode,
    isp,
    lat,
    lng
  ) {
    this.city = city;
    this.company = company;
    this.continentCode = continentCode;
    this.countryName = countryName;
    this.countryCode = countryCode;
    this.isp = isp;
    this.lat = lat;
    this.lng = lng;
  }
};
