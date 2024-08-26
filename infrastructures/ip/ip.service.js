const FormData = require("form-data");
const { Location } = require("../../domains/value-objects");

module.exports = class IPAddressService {
  constructor(client, logger) {
    this.client = client;
    this.logger = logger;
    this.url = "https://iplocation.com/";
  }

  async getLocationFromIP(ip) {
    var form = new FormData();
    form.append("ip", ip);
    try {
      const response = await this.client.post(this.url, form.getBuffer(), {
        headers: form.getHeaders(),
      });
      const {
        city,
        company,
        continent_code,
        country_name,
        country_code,
        isp,
        lat,
        lng,
      } = response.data;
      return new Location(
        city,
        company,
        continent_code,
        country_name,
        country_code,
        isp,
        lat,
        lng
      );
    } catch (err) {
      this.logger.error(err);
    }
  }
};
