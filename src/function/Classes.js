const Video = require('../assets/Video');
const User = require('../assets/User');
module.exports = {
    /**
     * @class
     * Export all function from aparat.js
     * Example:
     * ```js
     * const { Aparat } = require('aparat.js');
     * const aparat = new Aparat.User();
     * ```
     * @returns
     */
    aparat: class Aparat {
        constructor () {
          this.user = new User();
          this.video = new Video();
        };
    },

    /**
     * @class
     * Export all function from aparat.js
     * Example:
     * ```js
     * const { API } = require('aparat.js');
     * const api = new API.User();
     * ```
     * @returns
     */
    api: class API {
        constructor () {
          this.user = new User();
          this.video = new Video();
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