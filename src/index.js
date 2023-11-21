module.exports = {
  /**
   * @class
   * Export all function from aparat.js
   * Example:
   * ```js
   * const { API } = require('aparat.js');
   * const api = new API();
   * ```
   * @returns
   */
  API: class API {
    constructor() {
      const APIUser = require('./assets/APIUser');
      const APIVideo = require('./assets/APIVideo');
      this.user = new APIUser();
      this.video = new APIVideo();
    };
  }
};
/**
 * @copyright
 * Bot Coded by mr.sinre :) | https://dsc.gg/persian-caesar
 * @copyright
 * Work for Persian Caesar | https://dsc.gg/persian-caesar
 * @copyright
 * Please Mention Us "Persian Caesar", When Have Problem With Using This Code!
 * @copyright
 */